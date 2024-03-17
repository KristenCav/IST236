class Destination {
    constructor(id, countryId, name, price, foundedYear, rating, imageUrl, description) {
      this.id = id;
      this.countryId = countryId;
      this.name = name;
      this.price = price;
      this.foundedYear = foundedYear;
      this.rating = rating;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.name} was founded in ${this.foundedYear} - Price: ${this.price}, Rating: ${this.rating}`;
    }
  }
  
  export default Destination;