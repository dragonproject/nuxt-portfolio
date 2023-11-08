const data = [
    {name: "Joe Biden", period: "2021-"},
    {name: "Donald Trump", period: "2017-2021"},
    {name: "Barack Obama", period: "2009-2017"},
]

export default defineEventHandler((event) => {
    return{
        api: data
    }
})