    import { Link } from 'react-router-dom';
import Input from '../../../../Components/Input';
import { useAuth } from '../viewModels/useAuth';
    export default function LoginPage() {
        const { 
            handleSubmit, 
            error, 
            loading, 
            email, 
            setEmail, 
            password, 
            setPassword 
        } = useAuth();




        
        return (
            <div className='min-h-screen flex justify-center border flex-col items-center'>
                <Link to={"/"} className='absolute top-5 left-5 text-blue-600 hover:text-blue-800 flex items-center gap-2'>
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                  </svg>
                  Regresar
                </Link>
                <h2 className="font-medium text-3xl mb-6">Iniciar Sesión en SGH</h2>
                <form 
                onSubmit={handleSubmit}
                className='rounded px-6 w-full max-w-sm'
                >
                    <button type='button' className='peer w-full rounded-md border mt-3 px-4 py-3 font-medium shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition'>
                      <svg className='w-5 h-5' viewBox='0 0 24 24'>
                        <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'/>
                        <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'/>
                        <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'/>
                        <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'/>
                      </svg>
                      Continuar con Google
                    </button>
                    <span className='w-full text-center block mt-4'> o </span>
                    <div>
                        <Input value={email} setValue={setEmail} label="Email" />
                    </div>
                    <div>
                        <Input value={password} setValue={setPassword} label="Password" type="password" />
                    </div>
                    {error && (
                        <div>{error}</div>
                    )}
                    <button 
                        type="submit" 
                        disabled={loading}
                        className='peer w-full bg-blue-600 rounded-md mt-5 px-4 py-3 font-medium text-white shadow-sm'
                    >
                        {loading ? 'Cargando...' : 'Iniciar Sesión'}
                    </button>
                    <span className='w-full text-sm cursor-pointer text-blue-600 text-center block my-4'> ¿Olvidaste tu contraseña? </span>
                    <div  className='w-full text-sm text-center text-gray-600 block my-4'> ¿No tienes cuenta? <span className='text-blue-600 cursor-pointer'> Crea una </span>  </div>
                </form>
            </div>
        );
    }
