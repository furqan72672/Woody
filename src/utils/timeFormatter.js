function timeFormatterArr(value){
    let val=value
    val.forEach(element => {
        let from = parseInt(element.from);
        let to = parseInt(element.to);
        if(to===0||to===24){
            element.to = `${12} AM`
        }
        else if(to<12){
            element.to = `${to} AM`
        }
        else if(to===12){
            element.to = `${to} PM`
        }
        else if(to>12){
            element.to = `${to-12} PM`
        }
        if(from===0||from===24){
            element.from = `${12} AM`
        }
        else if(from<12){
            element.from = `${from} AM`
        }
        else if(from===12){
            element.from = `${from} PM`
        }
        else if(from>12){
            element.from = `${from-12} PM`
        }
    });
    return val;
}


function timeFormatter(value){
    let val=value;
    let from = parseInt(val.from);
    let to = parseInt(val.to);
    if(to===0||to===24){
        val.to = `${12} AM`
    }
    else if(to<12){
           val.to = `${to} AM`
    }
    else if(to===12){
        val.to = `${to} PM`
    }
    else if(to>12){
        val.to = `${to-12} PM`
    }
    if(from===0||from===24){
        val.from = `${12} AM`
    }
    else if(from<12){
        val.from = `${from} AM`
    }
    else if(from===12){
        val.from = `${from} PM`
    }
    else if(from>12){
        val.from = `${from-12} PM`
    }
    return val;
}

export {timeFormatterArr,timeFormatter}