import QuoteForm from "../components/quotes/QuoteForm.js";
const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
