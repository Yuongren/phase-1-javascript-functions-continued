// code your solution here
function saturdayFun(action = 'roller-skate') {
    return `This Saturday, I want to ${action}!` 
}
saturdayFun("bathe my dog")

function mondayWork(action = 'go to the office') {
    return `This Monday, I will ${action}.`
}
mondayWork("work from home")

function wrapAdjective(wrapper = "*"){
    return function (msg = "a hard worker"){
        return `You are ${wrapper}${msg}${wrapper}!`; 
    }
}
console.log(wrapAdjective('||'));