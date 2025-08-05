import React, { useState } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

export const Footer: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginForm);
    // Implement login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    // Implement sign up logic
  };

  return (
    <footer className="bg-[rgba(255,245,229,1)] self-stretch w-full mt-[46px] px-[62px] py-[25px] rounded-[50px_50px_0px_0px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[30%] max-md:w-full max-md:ml-0">
          <div className="text-sm text-[rgba(11,81,60,1)] font-bold uppercase max-md:mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/a79f4084f2394f4db875fd58e1c4b5fc/a6597a178bc781a7f53138025977b9d581f3173c?placeholderIfAbsent=true"
              alt="Company logo"
              className="aspect-[1.82] object-contain w-[226px] max-w-full"
            />
            <p className="mt-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        
        <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
          <div className="w-full max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <nav className="w-[48%] max-md:w-full max-md:ml-0">
                  <div className="text-[rgba(68,68,68,1)] text-[19px] font-medium tracking-[-0.38px] mt-[122px] max-md:mt-10">
                    <h3 className="font-semibold text-[20px] text-[rgba(208,90,105,1)] mb-4">
                      HOROSCOPE- IMPORTANT LINKS
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                          Market
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                          Panchang
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                          Free kundlu
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                
                <nav className="w-[23%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-[rgba(68,68,68,1)] text-[19px] font-medium tracking-[-0.38px] mt-[122px] max-md:mt-10">
                    <h3 className="font-semibold text-[20px] text-[rgba(208,90,105,1)] mb-4">
                      ASTROLOGERS
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                          Astrologer's login
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                          Astrologer's registration
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                
                <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="w-full max-md:mt-10">
                    <div className="flex gap-5 justify-between mb-[76px]">
                      <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/a79f4084f2394f4db875fd58e1c4b5fc/552403f25f40072f3278c231b28ce8655d6435f2?placeholderIfAbsent=true"
                          alt="Facebook"
                          className="aspect-[1] object-contain w-[45px] shrink-0"
                        />
                      </a>
                      <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/a79f4084f2394f4db875fd58e1c4b5fc/f1786dd8e8a2489f34d97f79b2329790c8f4915c?placeholderIfAbsent=true"
                          alt="Twitter"
                          className="aspect-[1] object-contain w-[45px] shrink-0"
                        />
                      </a>
                      <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/a79f4084f2394f4db875fd58e1c4b5fc/711c7b4597cfae945b0c88a2881b9ad4b012e68d?placeholderIfAbsent=true"
                          alt="Instagram"
                          className="aspect-[1] object-contain w-[46px] self-stretch shrink-0"
                        />
                      </a>
                    </div>
                    
                    <nav className="text-[rgba(68,68,68,1)] text-[19px] font-medium tracking-[-0.38px] max-md:mt-10">
                      <h3 className="font-semibold text-[20px] text-[rgba(208,90,105,1)] mb-4">
                        CONTACT US
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-[14px] text-[rgba(68,68,68,1)] hover:text-[rgba(208,90,105,1)] transition-colors">
                            Classes
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex w-[803px] max-w-full gap-4 text-sm font-normal items-start mt-[60px] max-md:mt-10 max-md:flex-col">
              <div className="flex-1 bg-[rgba(217,217,217,0)] flex flex-col text-[#444444] pt-3 pb-[19px] px-[23px] rounded-[100px] border-[rgba(11,81,60,1)] border-solid border-2 max-md:px-5 min-w-0">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL ADDRESS"
                  className="border-0 bg-transparent outline-none placeholder-[#444444] text-[#444444] w-full"
                  required
                />
              </div>
              
              <div className="flex-1 flex flex-col min-w-0">
                <div className="bg-[rgba(217,217,217,0)] flex flex-col text-[#444444] pt-3 pb-[19px] px-[23px] rounded-[100px] border-[rgba(11,81,60,1)] border-solid border-2 max-md:px-5 relative">
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                    placeholder="PASSWORD"
                    className="border-0 bg-transparent outline-none placeholder-[#444444] text-[#444444] w-full pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-[#444444] hover:text-[rgba(208,90,105,1)]"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                
                <div className="text-[rgba(68,68,68,1)] tracking-[-0.28px] ml-[23px] mt-[13px] max-md:ml-2.5 text-xs">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="hover:text-[rgba(208,90,105,1)] transition-colors mr-3"
                  >
                    Forgot password?
                  </button>
                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="hover:text-[rgba(208,90,105,1)] transition-colors"
                  >
                    Sign up
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                className="text-[rgba(11,81,60,1)] text-lg font-bold hover:text-[rgba(208,90,105,1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(11,81,60,1)] rounded px-4 py-2 whitespace-nowrap max-md:w-full max-md:mt-4"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
