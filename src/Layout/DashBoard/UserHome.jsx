import { Avatar, Card } from 'keep-react';
import { FaHeart } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth()
    return (
        <div className='flex flex-wrap gap-20'>
            <Card
                imgSrc="https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-technology-background-binary-computer-code-vector-design-image_458702.jpg"
                imgSize="md"
                className="max-w-xl flex-1">
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-200">
                    <FaHeart size={20} weight="bold" color="white" />
                </Card.Container>
                <Card.Container className="flex flex-col items-center justify-center">
                    <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                        <Avatar size="2xl" shape="circle" img={user ? user?.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQmL_fDSFZieso1A_GJuocC7waOIodM_uPNQ&usqp=CAU'} />
                    </Card.Container>
                    <Card.Container className="mb-3 mt-10 text-center">
                        <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">{user ? user?.displayName : 'N/A'}</Card.Title>
                        <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">Web Developer</Card.Title>
                    </Card.Container>
                    <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                Joined
                            </Card.Title>
                            <Card.Title className="!text-body-1 !font-semibold text-metal-800">2021</Card.Title>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                Projects
                            </Card.Title>
                            <Card.Title className="!text-body-1 !font-semibold text-metal-800">32</Card.Title>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                Rating
                            </Card.Title>
                            <Card.Title className="!text-body-1 !font-semibold text-metal-800"><span className='text-yellow-500 text-2xl mr-1'>☆</span>4.7</Card.Title>
                        </Card.Container>
                    </Card.Container>
                </Card.Container>
            </Card>

            <div>
                <h2 className='text-center text-4xl font-semibold '>Projects Timeline</h2>
                <ul className="steps steps-vertical ml-20 mt-6">

                    <li className="step step-primary">WedZone - Aug, 23</li>
                    <li className="step step-primary">GameX - Sept, 23</li>
                    <li className="step step-primary">BrandShop - Sept, 23</li>
                    <li className="step step-primary">CoStay - Oct, 23 </li>
                    <li className="step step-primary">VelocitiWork - Nov, 23</li>
                    <li className="step font-semibold step-neutral">TaskForge - Dec, 23 - in progress</li>

                </ul>
            </div>
        </div>
    );
};

export default UserHome;