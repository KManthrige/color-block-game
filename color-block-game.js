$(document).ready(clickOnBlock)

let num = randomNumber(0, 3)

function clickOnBlock() {
    $('#redBlock').click(function () {
        let value = $(this).attr('class')
        selectedBlock(value)
    }
    )
    $('#blueBlock').click(function () {
        let value = $(this).attr('class')
        selectedBlock(value)
    }
    )
    $('#greenBlock').click(function () {
        let value = $(this).attr('class')
        selectedBlock(value)
    }
    )
    $('#yellowBlock').click(function () {
        let value = $(this).attr('class')
        selectedBlock(value)
    }
    )

}

function randomNumber(min, max) {
    let colorArray = ['red', 'blue', 'green', 'yellow']
    let colorNumber = Math.floor(Math.random() * (1 + max - min) + min);
    console.log('color is', colorArray[colorNumber])
    return colorArray[colorNumber]

}

function selectedBlock(value) {
    console.log("random", num)
    console.log('You clicked', value)

    // if (value == num) {
    //     let wl = $('#wonLost')
    //     wl.empty()
    //     wl.append('you won')
    //     console.log("yay you got it correct")
    // } else {
    //     let wl = $('#wonLost')
    //     wl.empty()
    //     wl.append('you lost')
    //     console.log("try again")
    // }

    let el = $('#colorPicked')
    el.empty()
    el.append(value)

    let wl = $('#wonLost')
    wl.empty()
    wl.append(num == value ? 'you won' : 'try again')

}


