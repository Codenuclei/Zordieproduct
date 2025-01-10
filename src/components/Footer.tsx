import { Button } from "./ui/button";


const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-12 px-8 md:px-20 ">
            <div className="flex justify-between items-center mb-[20px]">
                <div className="flex gap-2">
                    <img src="/zordieai.png" className="" alt="" />
                    <div className="flex flex-col  justify-between">
                        <h1 className="font-bold">ZORDIE AI</h1>
                        <p className="text-[#F5F5F5] text-xs md:text-sm pb-1">Visualize product ideas fast and easy with AI</p>
                    </div>
                </div>
                <div>
                    <Button className='bg-[#FF1E22] max-sm:w-[120px] hover:bg-[#ff191de6] font-bold py-1 px-2  border  rounded-xl border-black' style={{ boxShadow: 'inset 1px 1px 0px 0px #69B5FF, inset 0px 1px 1px 1px #69B5FF' }}
                    >
                        Sign up for free
                    </Button>
                </div>
            </div>

            <div className="container mx-auto h-[1px] bg-[#2E2E2E]  mb-[40px]"></div>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div>
                    <h6 className="font-medium mb-2">Zordie AI</h6>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-white">Product</a></li>
                        <li><a href="#" className="hover:text-white">AI UI Design</a></li>
                        <li><a href="#" className="hover:text-white">Design Assistant</a></li>
                        <li>
                            <a href="#" className="hover:text-white flex items-center ">
                                Autodesigner 2.0 <span className="bg-radial-grad shadow-lg text-white text-xs px-1 rounded ml-1"
                                    style={{
                                        background: 'radial-gradient(50% 50% at 50% 50%, #3F0506 0%, #FF191D 100%)', boxShadow: '0px 2px 12px 0px #A881FEA3',
                                    }}
                                >NEW</span>
                            </a>
                        </li>
                        <li><a href="#" className="hover:text-white">Screenshot Scanner</a></li>
                        <li><a href="#" className="hover:text-white">Wireframe Scanner</a></li>
                        <li><a href="#" className="hover:text-white">UI Design</a></li>
                        <li><a href="#" className="hover:text-white">UX Design</a></li>
                        <li><a href="#" className="hover:text-white">Wireframing</a></li>
                        <li><a href="#" className="hover:text-white">Mockups</a></li>
                        <li><a href="#" className="hover:text-white">Prototyping</a></li>
                        <li><a href="#" className="hover:text-white">Zordie AI vs Other UI Tools</a></li>
                        <li><a href="#" className="hover:text-white">Figma Alternative</a></li>
                    </ul>
                </div>

                {/* Templates */}
                <div>
                    <h6 className="font-medium mb-2">Templates</h6>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-white">UI Design Templates</a></li>
                        <li><a href="#" className="hover:text-white">Mobile App Templates</a></li>
                        <li><a href="#" className="hover:text-white">Website Templates</a></li>
                        <li><a href="#" className="hover:text-white">Web App Templates</a></li>
                        <li><a href="#" className="hover:text-white">Tablet App Templates</a></li>
                        <li><a href="#" className="hover:text-white">UI Components Library</a></li>
                        <li><a href="#" className="hover:text-white">Wireframes</a></li>
                        <li><a href="#" className="hover:text-white">App Wireframe Templates</a></li>
                        <li><a href="#" className="hover:text-white">Website Wireframe Templates</a></li>
                    </ul>
                </div>

                {/* Solutions */}
                <div>
                    <h6 className="font-medium mb-2">Solutions</h6>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-white">Product Managers & Product Teams</a></li>
                        <li><a href="#" className="hover:text-white">Designers & UX Pros</a></li>
                        <li><a href="#" className="hover:text-white">Marketers</a></li>
                        <li><a href="#" className="hover:text-white">Business Analysts</a></li>
                        <li><a href="#" className="hover:text-white">Startup Founders</a></li>
                        <li><a href="#" className="hover:text-white">Consultants & Agencies</a></li>
                        <li><a href="#" className="hover:text-white">Developers</a></li>
                        <li><a href="#" className="hover:text-white">Enterprise</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h6 className="font-medium mb-2">Resources</h6>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Pricing</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li>
                            <a href="#" className="hover:text-white flex items-center">
                                Affiliate <span className="bg-red-500 text-white text-xs px-1 rounded ml-1"
                                    style={{
                                        background: 'radial-gradient(50% 50% at 50% 50%, #3F0506 0%, #FF191D 100%)', boxShadow: '0px 2px 12px 0px #A881FEA3',
                                    }}
                                >NEW</span>
                            </a>
                        </li>
                        <li><a href="#" className="hover:text-white">Research</a></li>
                        <li><a href="#" className="hover:text-white">Press</a></li>
                        <li><a href="#" className="hover:text-white">Releases</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h6 className="font-medium mb-2">Social Media</h6>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Twitter</a></li>
                        <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">TikTok</a></li>
                        <li><a href="#" className="hover:text-white">YouTube</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h6 className="font-medium mb-2">Legal</h6>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms Of Service</a></li>
                        <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto h-[1px] bg-[#2E2E2E] mt-[40px] mb-[40px]"></div>
            <div className="text-center text-xs md:text-sm mt-8 mb-8">
                <p>© 2024 Zordie AI Technologies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;