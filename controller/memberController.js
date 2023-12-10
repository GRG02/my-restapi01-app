const Member = require('./../models/member');

//เพิ่ม (Insert/Create/Add) ข้อมูลลง Collection: member
const insertMemberCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปบันทึกลง Collection ใน MongoDB
    const member = new Member({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        age: request.body.age,
        isActive: request.body.isActive
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Member.create(member)
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't save data...." })
    }
}

//แก้ไช (Update) ข้อมูลลง Collection: member
const updateMemberCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปแก้ไขลง Collection ใน MongoDB
    const member = new Member({
        _id: request.body._id,
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        age: request.body.age,
        isActive: request.body.isActive
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Member.updateOne({ _id: member._id }, {
            $set: {
                firstname: member.firstname,
                lastname: member.lastname,
                age: member.age,
                isActive: member.isActive
            }
        })
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't update data...." })
    }
}

//ลบ (Delete) ข้อมูลลง Collection: member
const deleteMemberCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปแก้ไขลง Collection ใน MongoDB
    const member = new Member({
        _id: request.body._id
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Member.deleteOne({ _id: member._id })
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't delete data...." })
    }
}

//ดึงข้อมูลทั้งหมดจาก Collection: member
const getAllMemberCtrl = async (request, response) => {
    //ดึงข้อมูลทั้งหมดจาก Collection ใน MongoDB
    try {
        const result = await Member.find();
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't get data...." })
    }
}

module.exports = {
    insertMemberCtrl,
    updateMemberCtrl,
    deleteMemberCtrl,
    getAllMemberCtrl
}