export const QuoteViewComponent = ({quote}) => {
    if (quote) {
        return <p>{quote}</p>
    }
    return <p>Loading...</p>
}