// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bad453365amsh2a272368215420fp1435a5jsn367629a9fcd5',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

alert("script is working")


const form = document.getElementById('myForm');

const getData = (e) => {

    e.preventDefault()

    var part = document.forms['myForm']['part'].value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bad453365amsh2a272368215420fp1435a5jsn367629a9fcd5',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            response.map( (cval) => {

                

                document.getElementById('output').innerHTML+=`
                

                <div class="col-md-6">
                
                <div class="card" style="width: 20rem;">
                <img src=${cval.gifUrl} class="card-img-top" alt="...">
                <div class="card-body">  
                  <p><b>Body Part :</b> ${cval.bodyPart}</p>
                  <p><b>Name :</b> ${cval.name}</p>
                  <p><b>equipment :</b> ${cval.equipment}</p>
                  <p><b>Target :</b> ${cval.target}</p>
                </div>
              </div>
                </div>
                
                `

            } )


        })
        .catch(err => console.error(err));
}


form.addEventListener('submit', getData)

