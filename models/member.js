//ไฟลที่แมปกับตัวข้อมูลใน Collection/Table ในฐานข้อมูล
const mongoose = require('mongoose')

//สร้าง Schema ของ Collection ที่จะทำงานด้วย
const memberSchema = mongoose.Schema(
    {
        firstname:{
            require: true,
            type: String
        },
        lastname:{
            require: true,
            type: String
        },
        age:{
            require: true,
            type: Number
        },
        isActive:{
            require: true,
            type: Boolean
        }
    },{
        collection:'member',
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Member', memberSchema)