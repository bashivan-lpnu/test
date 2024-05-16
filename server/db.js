const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString: "postgres://default:fuGdhlw5KTA4@ep-still-tree-a40ws1h7-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
})

module.exports = pool