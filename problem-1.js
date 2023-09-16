const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"].reduce((accumulator, company) => {
    if (company.charAt(0) !== 'a'){
        return  accumulator + company + "-";
    }
    return accumulator
    
}, "")

console.log(companies)