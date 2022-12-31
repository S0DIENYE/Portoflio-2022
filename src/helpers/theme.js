const setTheme = (currentTheme) => {

    const selectedCssProps = Array.from(document.styleSheets).
        reduce((prevStyle, curStyle) => (
            prevStyle = [
                ...prevStyle,
                ...Array.from(curStyle.cssRules).reduce((prevRule, curRule) => {
                    prevRule = curRule.selectorText === ":root" ? [
                        ...prevRule,
                        ...Array.from(curRule.style).filter(item => item.startsWith('--selected'))
                    ] : prevRule
                    return prevRule;
                }, [])
            ]
        ), [])

    // console.log(selectedCssProps)
    selectedCssProps.forEach(value => {
        document.documentElement.style.setProperty(
            value, `var(--${currentTheme}${value.substring(10)})
            `);
            console.log(document.documentElement);
            console.log(value);
    })
}

export default setTheme;