// Libraries
import { scroller } from 'react-scroll'


export class disableScroll {
    static on() {
        document.body.style.overflow = 'hidden'
        document.body.style.top = `-${window.scrollY}px`
    }

    static off() {
        document.body.style.overflow = 'auto'
        const scrollY = document.body.style.top
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
}


export const scrollTo = scrollerConfig => {
    const fixedConfig = {
        duration: 1500,
        smooth: true
    }

    scroller.scrollTo(scrollerConfig.element, { ...fixedConfig, offset: scrollerConfig.offset || 0 })
}


export const formattingTime = time => {
    let seconds = parseInt(time)
    let minutes = Math.floor(seconds/60)
    
    seconds = seconds%60

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    return `${minutes}:${seconds}`
}