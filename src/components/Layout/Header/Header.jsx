import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
  import { Link } from 'react-router-dom';
  import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
  import { useDispatch } from 'react-redux';
  import { logout } from '../../../redux/actions/user';
  
  const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
  
  const Header = ({ isAuthenticated = true, user }) => { //used also a true
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const dispatch = useDispatch();
  
    const logoutHandler = () => {
      onClose();
      dispatch(logout());
    console.log('logged out');
    };
  
    return (
      <>
        <ColorModeSwitcher />
  
        <Button
          onClick={onOpen}
          colorScheme={'red'}
          width="12"
          height={'12'}
          rounded="full"
          zIndex={'overlay'}
          position={'fixed'}
          top="6"
          left="6"
        >
          <RiMenu5Fill />
        </Button>
  
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay backdropFilter={'blur(5px)'} />
          <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>iTechOnline MANAGEMENT</DrawerHeader>
  
            <DrawerBody>
              <VStack spacing={'4'} alignItems="flex-start">
                <LinkButton onClose={onClose} url="/" title="Home" />
                <LinkButton
                  onClose={onClose}
                  url="/courses"
                  title="Browse All Courses"
                />
                <LinkButton
                  onClose={onClose}
                  url="/request"
                  title="Request a Course"
                />
                <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
                <LinkButton onClose={onClose} url="/about" title="About" />
  
                <HStack
                  justifyContent={'space-evenly'}
                  position="absolute"
                  bottom={'2rem'}
                  width="80%"
                >
                  {isAuthenticated ? (
                    <>
                      <VStack>
                        <HStack>
                          <Link onClick={onClose} to="/profile">
                            <Button variant={'ghost'} colorScheme={'red'}>
                              Profile
                            </Button>
                          </Link>
                          <Button variant={'ghost'} onClick={logoutHandler}>
                            <RiLogoutBoxLine />
                            Logout
                          </Button>
                        </HStack>
                        <Link onClick={onClose} to="/admin/dashboard">
                            <Button colorScheme={'purple'} variant="ghost">
                              <RiDashboardFill style={{ margin: '4px' }} />
                              Dashboard
                            </Button>
                          </Link>
                        {user && user.role === 'admin' && (
                          <Link onClick={onClose} to="/admin/dashboard">
                            <Button colorScheme={'purple'} variant="ghost">
                              <RiDashboardFill style={{ margin: '4px' }} />
                              Dashboard
                            </Button>
                          </Link>
                        )}
                      </VStack>
                    </>
                  ) : (
                    <>
                      <Link onClick={onClose} to="/login">
                        <Button colorScheme={'pink'}>Login</Button>
                      </Link>
  
                      <p>OR</p>
  
                      <Link onClick={onClose} to="/register">
                        <Button colorScheme={'pink'}>Sign Up</Button>
                      </Link>
                    </>
                  )}
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default Header;
  