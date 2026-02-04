import React, { useEffect } from 'react'

import { Box, Button, Card, Container, IconButton, InputAdornment, Typography } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useLogin } from 'src/hooks/useLogin'
import InputField from 'src/components/InputField'
import { usePassword } from 'src/hooks/components/usePassword'
import { RiEyeFill, RiEyeOffFill } from '@remixicon/react'
import BackdropWrapper from 'src/components/Backdrop'
import AlertWrapper from 'src/components/Alert'
import { useSidebarContext } from 'src/context/SidebarContext'

const Login = () => {

	const { handleLogin, validationSchema, dataLogin } = useLogin()
	const { code, loading, message } = dataLogin
	
	const { setCustomOpenMenu } = useSidebarContext()

	const { handleShowPassword, showPassword } = usePassword()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onBlur',
	})


	useEffect(() => {
		setCustomOpenMenu(true)
		return () => { }
	}, [])

	return (
		<Box sx={{
			flex: 1,
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			backgroundImage: 'url("/static/img/bg-login.jpg")',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}}>
			<BackdropWrapper open={loading} />
			<Box sx={{
				height: '100%',
				display: 'flex',
				backdropFilter: 'blur(10px)'
			}}>
				<Box sx={{
					display: 'flex',
					width: '100%',
					padding: { xs: 0, lg: 4 },
					m: 'auto'
				}}>
					<Container maxWidth='sm'>
						<Card sx={{
							p: { xs: 2, lg: 5 },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							background: (theme) => theme.colors.alpha.white[70]
						}}>
							<img src='/static/img/municipio.svg' width={300} loading='lazy' />
							<Typography variant='h2' mt={3}>
								Login
							</Typography>
							<Box sx={{ 
								mt: 3,	
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								width: '90%'
							}}>
								<form onSubmit={handleSubmit(data => handleLogin({ dataForm: data }))}>
									<InputField
										id='username'
										name='username'
										label='Usuario'
										placeholder='Ingresa tu usuario'
										size='medium'
										error={errors.username && Boolean(errors.username)}
										helperText={errors.username && errors.username.message}
										register={register}
									/>
									<InputField
										id='password'
										name='password'
										label='Contraseña'
										placeholder='Ingresa tu contraseña'
										size='medium'
										error={errors.password && Boolean(errors.password)}
										helperText={errors.password && errors.password.message}
										register={register}
										typeTextField={showPassword ? 'text' : 'password'}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<IconButton onClick={handleShowPassword}>
														{
															showPassword
																?
																<RiEyeFill />
																:
																<RiEyeOffFill />
														}
													</IconButton>
												</InputAdornment>
											)
										}}
									/>
									{
										(code && (code !== 200))
										&&
										<AlertWrapper type='error' text={message} />
									}
									<Button
										variant='contained'
										fullWidth
										sx={{
											mt: 1,
											color: 'white'
										}}
										size='large'
										type='submit'>
										Iniciar sesión
									</Button>
								</form>
							</Box>
						</Card>
					</Container>
				</Box>
			</Box>
		</Box>
	)
}

export default Login