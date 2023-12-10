//ไฟล์ที่จัดการเส้นทางในการใช้งาน API กับ Collection: Member ใน MongoDB

const express = require('express')
const memberController = require('./../controller/memberController');

const router = express.Router()

router.post('/member', memberController.insertMemberCtrl)
router.get('/member', memberController.getAllMemberCtrl)
router.put('/member', memberController.updateMemberCtrl)
router.delete('/member', memberController.deleteMemberCtrl)

module.exports = router