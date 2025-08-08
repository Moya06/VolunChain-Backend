import { Router } from "express";
import AuthController from "../modules/auth/presentation/controllers/Auth.controller";
// import authMiddleware from "../middleware/authMiddleware"; // Temporarily disabled

const router = Router();

// Health check for auth module
router.get("/health", (req, res) => {
  res.json({ status: "Auth module is available", module: "auth" });
});

// Public routes (now using functional controller)
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.post("/send-verification-email", AuthController.resendVerificationEmail);
router.get("/verify-email/:token", AuthController.verifyEmail);
router.get("/verify-email", AuthController.verifyEmail); // Support query param method
router.post("/resend-verification", AuthController.resendVerificationEmail);

// Wallet verification routes
router.post("/verify-wallet", AuthController.verifyWallet);
router.post("/validate-wallet-format", AuthController.validateWalletFormat);

// Protected routes - temporarily commented out due to interface mismatch
// router.get('/protected', authMiddleware.authMiddleware, AuthController.protectedRoute);
// router.get('/verification-status', authMiddleware.authMiddleware, AuthController.checkVerificationStatus);

// Routes requiring verified email - temporarily commented out due to interface mismatch
// router.get('/verified-only',
//   authMiddleware.authMiddleware,
//   authMiddleware.requireVerifiedEmail,
//   (req, res) => {
//     res.json({ message: "You have access to this protected route because your email is verified!" });
//   }
// );

export default router;
