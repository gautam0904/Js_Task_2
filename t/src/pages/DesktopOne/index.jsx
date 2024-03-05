import React from "react";

import { Button, Img, Input, PagerIndicator, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-end mx-auto pt-[13px] w-full">
        <div className="cursor-pointer flex flex-col gap-[13px] items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1065px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-1 flex-row gap-3 items-center justify-between w-[18%] sm:w-full">
              <div className="bg-gray-800 flex flex-col h-[88px] items-center justify-end p-[15px] rounded-[50%] w-[88px]">
                <Img
                  className="h-[57px] md:h-auto object-cover w-[58px] sm:w-full"
                  src="images/img_93917041.png"
                  alt="93917041"
                />
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtRobotoRomanMedium32"
              >
                LOGO
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-row gap-7 items-start justify-between w-[37%] sm:w-full">
              <Text
                className="text-base text-black-900 text-center uppercase"
                size="txtRobotoRomanRegular16"
              >
                HOME About Us Contact us Login
              </Text>
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_magnifyingglass.png"
                alt="magnifyingglass"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[501px] md:px-5 relative w-full">
              <div className="bg-amber-A200 flex flex-col h-full items-start justify-center m-auto p-[183px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-4 items-start justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtRobotoRomanMedium32"
                  >
                    YOUR PERSONAL COACH
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtRobotoRomanMedium32"
                  >
                    ONLINE TRAINING PROGRAMS
                  </Text>
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtInterMedium22"
                  >
                    <span className="text-black-900 font-roboto text-left font-medium">
                      Image from{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-black-900 font-roboto text-left font-medium underline"
                    >
                      Freepik
                    </a>
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[500px] inset-y-[0] my-auto object-cover right-[0] w-[46%]"
                src="images/img_zmin1.png"
                alt="zminOne"
              />
            </div>
            <Text
              className="mt-16 md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtRobotoRomanMedium32"
            >
              WHY PEOPLE CHOOSE US
            </Text>
            <Text
              className="mt-[21px] text-base text-center text-gray-500"
              size="txtRobotoRomanMedium16"
            >
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </Text>
            <div className="sm:h-[419px] h-[507px] md:h-[944px] max-w-[1000px] mt-[60px] mx-auto md:px-5 relative w-full">
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[52px] inset-x-[0] items-center justify-center mx-auto w-[65%]">
                <div className="bg-amber-A200 flex flex-col gap-[13px] items-center justify-end p-[21px] sm:px-5">
                  <Text
                    className="mt-[75px] text-black-900 text-center text-lg uppercase"
                    size="txtRobotoRomanMedium18"
                  >
                    Development
                  </Text>
                  <Text
                    className="leading-[26.00px] text-center text-gray-800_01 text-sm"
                    size="txtRobotoRomanRegular14"
                  >
                    <>
                      Sample text. Click to select the <br />
                      text box. Click again or double click to <br />
                      start editing the text.
                    </>
                  </Text>
                </div>
                <div className="bg-amber-A200 flex flex-col items-center justify-end p-[21px] sm:px-5 w-[46%] md:w-full">
                  <Img
                    className="h-[42px] md:h-auto mt-2 object-cover w-[42px]"
                    src="images/img_photography1.png"
                    alt="photographyOne"
                  />
                  <Text
                    className="mt-[25px] text-black-900 text-center text-lg"
                    size="txtRobotoRomanMedium18"
                  >
                    PHOTOGRAPHY
                  </Text>
                  <Text
                    className="leading-[26.00px] mt-[13px] text-center text-gray-800_01 text-sm"
                    size="txtRobotoRomanRegular14"
                  >
                    <>
                      Sample text. Click to select the <br />
                      text box. Click again or double click to <br />
                      start editing the text.
                    </>
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col md:gap-10 gap-[79px] justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
                    <div className="bg-amber-A200 flex md:flex-1 flex-col justify-end md:mt-0 mt-[3px] p-[21px] sm:px-5 w-[30%] md:w-full">
                      <Img
                        className="h-[46px] md:h-auto md:ml-[0] ml-[98px] mr-28 mt-2.5 object-cover w-[46px]"
                        src="images/img_reliability1.png"
                        alt="reliabilityOne"
                      />
                      <Text
                        className="mt-5 mx-auto text-black-900 text-center text-lg"
                        size="txtRobotoRomanMedium18"
                      >
                        HIGH QUALITY
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-3 mx-auto text-center text-gray-800_01 text-sm"
                        size="txtRobotoRomanRegular14"
                      >
                        <>
                          Sample text. Click to select the <br />
                          text box. Click again or double click to <br />
                          start editing the text.
                        </>
                      </Text>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[52px] items-center justify-between mb-0.5 w-[65%] md:w-full">
                      <div className="bg-amber-A200 flex flex-col items-center justify-end p-[21px] sm:px-5 w-[46%] md:w-full">
                        <Img
                          className="h-[46px] md:h-auto mt-3 object-cover w-[46px]"
                          src="images/img_coding1.png"
                          alt="codingOne"
                        />
                        <Text
                          className="mt-[17px] text-black-900 text-center text-lg uppercase"
                          size="txtRobotoRomanMedium18"
                        >
                          Development
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-[13px] text-center text-gray-800_01 text-sm"
                          size="txtRobotoRomanRegular14"
                        >
                          <>
                            Sample text. Click to select the <br />
                            text box. Click again or double click to <br />
                            start editing the text.
                          </>
                        </Text>
                      </div>
                      <div className="bg-amber-A200 flex flex-col items-center justify-end p-[21px] sm:px-5 w-[46%] md:w-full">
                        <Img
                          className="h-[42px] md:h-auto mt-2 object-cover w-[42px]"
                          src="images/img_photography1.png"
                          alt="photographyOne_One"
                        />
                        <Text
                          className="mt-[25px] text-black-900 text-center text-lg"
                          size="txtRobotoRomanMedium18"
                        >
                          PHOTOGRAPHY
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-[13px] text-center text-gray-800_01 text-sm"
                          size="txtRobotoRomanRegular14"
                        >
                          <>
                            Sample text. Click to select the <br />
                            text box. Click again or double click to <br />
                            start editing the text.
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[46px] md:h-auto md:ml-[0] ml-[295px] object-cover w-[46px]"
                    src="images/img_coding1.png"
                    alt="codingOne_One"
                  />
                </div>
              </div>
            </div>
            <div className="h-[514px] md:h-[573px] mt-[59px] md:px-5 relative w-full">
              <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-12 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[159px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-amber-400 text-center"
                    size="txtRobotoRomanMedium32Amber400"
                  >
                    LIFE IS GOOD
                  </Text>
                  <Text
                    className="mt-6 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanMedium24"
                  >
                    <>WHEN IT&#39;S LIVED FOR ONESELF</>
                  </Text>
                  <Text
                    className="leading-[26.00px] mt-6 text-base text-black-900"
                    size="txtRobotoRomanRegular16"
                  >
                    <>
                      It&#39;s great when lived for others! Unim ad minim
                      veniam, quis nostrud exercitation
                      <br />
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor <br />
                      in reprehenderit in voluptate velit esse cillum
                    </>
                  </Text>
                  <a
                    href="javascript:"
                    className="bg-amber-A200 h-[60px] justify-center ml-0.5 md:ml-[0] mt-[31px] sm:px-5 px-[35px] py-5 text-base text-black-900 tracking-[2.40px] w-[209px]"
                  >
                    <Text size="txtRobotoRomanMedium16Black900">
                      Learn More
                    </Text>
                  </a>
                </div>
              </div>
              <Img
                className="absolute h-[514px] inset-y-[0] my-auto object-cover right-[2%] w-2/5"
                src="images/img_3565087ff1.png"
                alt="3565087ffOne"
              />
            </div>
            <div className="flex flex-col items-center justify-start max-w-[944px] mt-[97px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoRomanRegular32"
                >
                  INFORMATION PARTNERS
                </Text>
                <Text
                  className="mt-[21px] text-base text-center text-gray-500"
                  size="txtRobotoRomanMedium16"
                >
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[54px] w-full">
                  <Img
                    className="h-[114px] md:h-auto object-cover"
                    src="images/img_2.png"
                    alt="Two"
                  />
                  <Img
                    className="h-[100px] md:h-auto object-cover"
                    src="images/img_3.png"
                    alt="Three"
                  />
                  <Img
                    className="h-[100px] md:h-auto object-cover"
                    src="images/img_5.png"
                    alt="Five"
                  />
                  <Img
                    className="h-[57px] md:h-auto object-cover"
                    src="images/img_4.png"
                    alt="Four"
                  />
                  <Img
                    className="h-[85px] md:h-auto object-cover"
                    src="images/img_6.png"
                    alt="Six"
                  />
                </div>
                <PagerIndicator
                  className="flex h-2.5 mt-[54px] w-11"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 border-gray-600 border border-solid bg-blue_gray-100 w-2.5"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 border-blue_gray-100 border border-solid bg-white-A700 w-2.5"
                  selectedWrapperCss="inline-block md:ml-[0] mx-[3.50px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[3.50px] sm:ml-[0]"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[126px] md:px-5 relative w-full">
              <footer className="bg-black-900 flex items-center justify-center mx-auto outline outline-[0.5px] outline-gray-100 w-full">
                <div className="flex flex-col items-center justify-center mb-[110px] ml-[197px] mr-[206px] mt-[70px] w-[73%]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[32%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtRobotoRomanRegular24"
                      >
                        <>DON&#39;T BE SHY</>
                      </Text>
                      <Text
                        className="mt-[18px] text-base text-white-A700"
                        size="txtRobotoRomanRegular16WhiteA700"
                      >
                        <>
                          Feel free to get in touch with me. <br />I am always
                          open to discussing new projects, <br />
                          creative ideas or opportunities to be <br />
                          part of your visions.
                        </>
                      </Text>
                      <div className="flex flex-row gap-[21px] items-center justify-start mt-10 w-[96%] md:w-full">
                        <div className="flex flex-col gap-[27px] items-center justify-start w-[14%]">
                          <Img
                            className="h-[42px] md:h-auto object-cover w-[42px]"
                            src="images/img_email11.png"
                            alt="emailEleven"
                          />
                          <Img
                            className="h-[38px] md:h-auto object-cover w-[38px]"
                            src="images/img_phonecall1.png"
                            alt="phonecallOne"
                          />
                        </div>
                        <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-[15px] text-white-A700"
                            >
                              <Text size="txtRobotoRomanSemiBold15">
                                Email Us
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="mt-1.5 text-base text-white-A700"
                            >
                              <Text size="txtRobotoRomanRegular16WhiteA700">
                                shaligraminfotech123@gmail.com
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="ml-0.5 md:ml-[0] mt-[23px] text-[15px] text-white-A700"
                            >
                              <Text size="txtRobotoRomanSemiBold15">
                                Contact Us
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-base text-white-A700"
                            >
                              <Text size="txtRobotoRomanRegular16WhiteA700">
                                +91 98285 67789
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[106px] justify-start w-[59%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-amber-A200"
                        size="txtRobotoRomanRegular32AmberA200"
                      >
                        Contact Us
                      </Text>
                      <div className="flex flex-col gap-[38px] items-start justify-start md:ml-[0] ml-[43px] w-[93%] md:w-full">
                        <Input
                          name="groupFive"
                          placeholder="Enter Your Name"
                          className="leading-[normal] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                          wrapClassName="ml-0.5 md:ml-[0] outline outline-amber-A200 w-full"
                          type="text"
                        ></Input>
                        <Input
                          name="groupFour"
                          placeholder="Enter Your Phone Number"
                          className="leading-[normal] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                          wrapClassName="ml-0.5 md:ml-[0] outline outline-amber-A200 w-full"
                          type="number"
                        ></Input>
                        <Input
                          name="groupThree"
                          placeholder="Enter Your Mail Address"
                          className="leading-[normal] p-0 placeholder:text-black-900 text-[15px] text-left w-full"
                          wrapClassName="ml-0.5 md:ml-[0] outline outline-amber-A200 w-full"
                        ></Input>
                        <Button className="cursor-pointer font-medium min-w-[209px] text-base text-center tracking-[2.40px]">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              <div className="bg-amber-A200 flex flex-col font-inter items-end justify-end mt-[-4px] mx-auto p-[22px] sm:px-5 w-full z-[1]">
                <Text
                  className="mr-[442px] mt-[3px] text-black-900 text-xl"
                  size="txtInterMedium20"
                >
                  © Copyright 2024 - All Rights Reserved.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
