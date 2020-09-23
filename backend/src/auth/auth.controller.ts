import {
    Controller,
    Post,
    Body,
    ValidationPipe,
    Get,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUserWithField } from './get-user.decorator';

@ApiTags('Authenticate')
@ApiBearerAuth('access-token') // has name match the one in the main file
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(
        @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
    ): Promise<void> {
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(
        @Body() authCredentialsDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentialsDto);
    }

    @Get('/me')
    @UseGuards(AuthGuard())
    whoAmI(
        @GetUserWithField('username') username: string,
    ): { username: string } {
        return { username };
    }
}
