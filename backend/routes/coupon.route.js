import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";
import Coupon from "../models/coupon.model.js";

const router = express.Router();

router.get("/", protectRoute, getCoupon);
router.post("/validate", protectRoute, validateCoupon);
router.post('/add-coupon', async (req, res) => {
    try {
      const coupons = req.body;
      const savedCoupons = await Coupon.insertOne(coupons); 
      res.status(201).json({ message: 'Coupons created successfully', coupons: savedCoupons });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

export default router;
