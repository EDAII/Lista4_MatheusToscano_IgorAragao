import React, { Component } from 'react'
import '../App.css'
import { times } from './times'
import { vetores } from './vetores'
import { shellSort, quickSort } from './sorting'
import Clock from './clock'

// Times que jogam em casa e fora
var home = [];
var away = [];

var partidas = [];


export default class partida extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inProgress: false,
            gols: {
                pro: 0,
                contra: 0
            }
        }
    }

    componentWillMount() {
        this.homeAway()
        this.match()
    }

    match() {
        times.forEach(time => { time.gols = Math.floor(Math.random() * (4 - 0 + 1)) + 0 })
    }

    compare() {
        var num = 2;

        var t0 = performance.now();
        shellSort(vetores[num]);
        var t1 = performance.now();
        var tShell = t1 - t0;

        var t2 = performance.now();
        quickSort(vetores[num]);
        var t3 = performance.now();
        var tQuick = t3 - t2;

        var result;
        if (tShell > tQuick) result = 'QuickSort';
        else result = 'QuickSort';

        return (
            <div>
                <h2>{result} é mais rápido no vetor [{vetores[num].toString()}].</h2>
                <h3>QuickSort: {tQuick}</h3>
                <h3>ShellSort: {tShell}</h3>
            </div>
        )
    }

    homeAway() {
        home = times.slice(0, times.length / 2)
        away = times.slice(times.length / 2, times.length)
        console.log("Home: ", home, "Away:", away)
        for(let i = 0; i <= times.length; i++){
            partidas.push(home[i])
            partidas.push(away[i])
        }
        console.log(partidas)
    }

    render() {
        return (
            <div className="containerPartida">
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Clock seconds={100} radius={70} stroke={28} resultados={times} />
                </div>
                <div className="jogos">
                    <div className="containerDivisao">
                        <div className="casa">
                            {home.map(time => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ display: 'flex', backgroundColor: time.color.bg, justifyContent: 'space-between', alignItems: 'center', width: 160 }}>
                                            <span style={{ color: time.color.letra, padding: 3, fontWeight: 600 }}>{time.nome.toUpperCase()}&nbsp;&nbsp;</span>
                                        </div>
                                        <span style={{ color: '#ede500', fontWeight: 'bold', margin: 5 }}>{time.gols}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="visitante">
                            {away.map(time => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <span style={{ color: '#ede500', fontWeight: 'bold', margin: 5 }}>{time.gols}</span>
                                        <div style={{ display: 'flex', backgroundColor: time.color.bg, justifyContent: 'space-between', alignItems: 'center', width: 160 }}>
                                            <span style={{ color: time.color.letra, padding: 3, fontWeight: 600 }}>{time.nome.toUpperCase()}&nbsp;&nbsp;</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/* <h2>{this.compare()}</h2> */}
            </div>
        )
    }
}
