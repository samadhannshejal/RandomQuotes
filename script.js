
async function getdata() {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    // console.log(data);
    let i = data.length;
    let j = 0;

    document.getElementById("right").addEventListener("click", () => {
      document.getElementById("quotes").innerHTML = null;
      if (j <= i) {
        const quote = data[j].text;
        const author = data[j].author;
        //    console.log(author);
        append(quote, author)
      }
      j++
    });
    document.getElementById("left").addEventListener("click", () => {
      document.getElementById("quotes").innerHTML = null;
      if (j >= 0) {
        const quote = data[j].text;
        const author = data[j].author;
        //    console.log(author);
        append(quote, author);
        j--
      }
    
    });

  } catch (e) {
    console.log(e);
  }

}
getdata();


function append(quote, author) {

  const h3 = document.createElement("h1");
  h3.innerHTML = quote;
  let h5 = document.createElement("h5");
  h5.innerHTML = `Author :${author}`;
  document.getElementById('quotes').append(h3, h5)

}