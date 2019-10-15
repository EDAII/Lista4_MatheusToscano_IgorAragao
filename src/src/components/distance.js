import React, { Component } from 'react'
import '../App.css'

var solarSystem = [
    {
        name: 'earth',
        distance: 80,
    },
    {
        name: 'mercury',
        distance: 40,
    },
    {
        name: 'saturn',
        distance: 280,
    },
    {
        name: 'neptune',
        distance: 600,
    },
    {
        name: 'jupiter',
        distance: 140,
    },
    {
        name: 'uranus',
        distance: 940,
    },
    {
        name: 'mars',
        distance: 106,
    },
    {
        name: 'venus',
        distance: 64,
    },
    {
        name: 'pluto',
        distance: 1000,
    },
]

let arrLength

export default class distance extends Component {
    state = {
        valid: true
    }

    heapSort(arr) {
        arrLength = arr.length
        for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
            this.maxHeap(arr, i)
        }
        for (let i = arrLength - 1; i > 0; i--) {
            this.swap(arr, 0, i)
            arrLength--

            this.maxHeap(arr, 0)
        }
        console.log('HEAP', arr)
        return arr
    }

    maxHeap(input, i) {
        const left = 2 * i + 1
        const right = 2 * i + 2
        let max = i

        if (left < arrLength && input[left].distance > input[max].distance) {
            max = left
        }

        if (right < arrLength && input[right].distance > input[max].distance) {
            max = right
        }

        if (max != i) {
            this.swap(input, i, max)
            this.maxHeap(input, max)
        }
    }

    swap(input, indA, indB) {
        const temp = input[indA].distance
        const tempName = input[indA].name

        input[indA].distance = input[indB].distance
        input[indA].name = input[indB].name
        input[indB].distance = temp
        input[indB].name = tempName
    }

    handleHeap() {
        this.heapSort(solarSystem)
        this.setState({ valid: false })
        this.forceUpdate()
    }

    render() {
        console.log("Solar:", solarSystem)
        return (
            <div>
                <button style={{ width: 100, height: 30, borderRadius: 4, border: 'none', marginTop: 20 }} onClick={() => this.handleHeap()}>Heap</button>
                <div class='solar-syst'>
                    <div class='sun'></div>
                    <div class='asteroids-belt'></div>
                    {solarSystem.map(planet => {
                        return (
                            <div class={planet.name} style={this.state.valid ? { marginTop: planet.distance/30, height: planet.distance, width: planet.distance } : null}></div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
