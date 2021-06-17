function domainName() { 
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

  let arr = [];
      for(let i=0; i <pronoun.length; i++) {
          for (let j=0; j < adj.length; j++) {
              for (let k = 0; k < noun.length; k++) {
                let newText = document.createElement("P")
                newText.innerText = pronoun[i]+adj[j]+noun[k]+".com"
//                 arr.push(pronoun[i] + adj[j] + noun[n] +".com");
                document.getElementById("theDomainGenerator").appendchild(newText)
                  
              }
          }
      }
//   document.querySelector(".theDomainGenerator").innerHTML = arr
    }