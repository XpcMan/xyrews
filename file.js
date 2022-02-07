




const form = document.forms['customer-data']
    
            form.addEventListener('submit', e => {
              
              e.preventDefault();
//     let scriptURL='';   
//   if(window.innerWidth>768){
//        fetch('https://script.google.com/macros/s/AKfycbxJEgT0z1_q-pBkGcN7VNYz2yUPW3LT1jT7IdPVIr0EIlhDWfCUIRCNKNd9Nk5gwMz-Gw/exec', { method: 'POST', body: new FormData(form)})
//                 .then(()=>{
//                     alert('thanks! your response has been shared')
//                     window.location.assign("index.html");
//                 }).catch(error => console.error('Error!', error.message))
//     }
//      else{
            fetch('https://script.google.com/macros/s/AKfycbzPmxWsX45G-nl4ISeoJjLuaa0O7Hhj-Fnl_b3ePYqCO22lOrP60qKBHbOubcH_lg2WMw/exec', { method: 'POST', body: new FormData(form)})
                .then(()=>{
                
                    alert('thanks! your response has been shared')
                    window.location.assign("index.html");
                }).catch(error => console.error('Error!', error.message))
        // else
        //    alert("Invalid Captcha");
            })
