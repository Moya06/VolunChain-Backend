import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
} from "class-validator";

export class RegisterDto {
  @IsString({ message: "Name must be a string" })
  @MinLength(2, { message: "Name must be at least 2 characters long" })
  @MaxLength(100, { message: "Name cannot exceed 100 characters" })
  name: string;

  @IsEmail({}, { message: "Please provide a valid email address" })
  email: string;

  @IsString({ message: "Password must be a string" })
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  @MaxLength(128, { message: "Password cannot exceed 128 characters" })
  password: string;

  @IsOptional()
  @IsString({ message: "Wallet address must be a string" })
  @MinLength(56, {
    message: "Stellar wallet address must be 56 characters long",
  })
  @MaxLength(56, {
    message: "Stellar wallet address must be 56 characters long",
  })
  walletAddress?: string;
}
