class News {
    constructor(
      id,
      type,
      agency,
      imageUrl,
      headline,
      date,
      author,
      description
    ) {
      this.id = id;
      this.type = type;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.description = description;
    }
  
    toString() {
      return `News Category: ${this.type} - Agency: ${this.agency} - Headline: ${this.headline} - Date: ${this.date} - Author: ${this.author} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default News;
  