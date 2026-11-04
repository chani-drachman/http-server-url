// Exercise 5: Extract Query Parameters
// Use https://site.com/products?id=15&type=book&lang=en
// Extract the values of id, type and lang with .searchParams.get() and print them:
//   ID: 15
//   Type: book
//   Language: en
//
// Run: node ex5.js

const { URL } = require("url");

const urlStr = 'https://site.com/products?id=15&type=book&lang=en';
// write your code here
const myUrl=new URL(urlStr)

const id=myUrl.searchParams.get("id")
const type=myUrl.searchParams.get("type")
const lang=myUrl.searchParams.get("lang")

console.log(`ID: ${id}`)
console.log(`Type: ${type}`)
console.log(`Language: ${lang}`)

