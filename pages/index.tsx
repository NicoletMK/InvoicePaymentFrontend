import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import {
  Button,
  Icon,
  TextField,
  FormControlLabel,
  Radio,
  InputAdornment,
  Button as MuiButton,
} from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Invoices: NextPage = () => {
  return (
    <div className="relative bg-gray-300 w-full h-[1024px] overflow-hidden text-left text-base text-gray-100 font-helvetica-neue">
      <div className="absolute top-[100px] left-[215px] rounded-xl bg-gray-200 box-border w-[1257px] h-[884px] overflow-hidden border-[2px] border-solid border-darkslategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-b-none bg-gray-200 box-border w-[709px] h-20 overflow-hidden text-17xl border-[2px] border-solid border-darkslategray-100">
          <b className="absolute top-[18px] left-[40px]">Create Invoice</b>
          <div className="absolute top-[62px] left-[458px] w-6 h-6 overflow-hidden" />
          <Button
            className="absolute top-[19px] left-[372px]"
            sx={{ width: 109 }}
            variant="outlined"
            color="primary"
            startIcon={<Icon>camera_alt_sharp</Icon>}
          >
            Save
          </Button>
          <Button
            className="absolute top-[19px] left-[496px]"
            sx={{ width: 183 }}
            variant="contained"
            color="primary"
            startIcon={<Icon>send_sharp</Icon>}
          >
            Send Invoice
          </Button>
        </div>
        <div className="absolute top-[0px] left-[707px] bg-gray-200 box-border w-[550px] h-20 overflow-hidden text-5xl border-[2px] border-solid border-darkslategray-100">
          <b className="absolute top-[26px] left-[30px]">Preview Invoice</b>
        </div>
        <div className="absolute top-[100px] left-[33px] w-[641px] h-[764px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 box-border w-[641px] h-[764px] overflow-hidden border-[1px] border-solid border-darkslategray-100">
            <div className="absolute top-[25px] left-[27px] w-[573px] h-[719px]">
              <b className="absolute top-[530px] left-[0px] text-5xl">
                Invoice Description
              </b>
              <div className="absolute top-[659px] left-[395px] flex flex-row items-center justify-start gap-[15px] text-xl">
                <div className="relative">Amount Due</div>
                <b className="relative">$0.00</b>
              </div>
              <TextField
                className="[border:none] bg-[transparent] absolute top-[593px] left-[0px]"
                sx={{ width: 227 }}
                color="primary"
                variant="outlined"
                type="text"
                label="Service Description"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <div className="absolute top-[569px] left-[0px]">
                Service Description
              </div>
              <Button
                className="absolute top-[658px] left-[0px]"
                variant="text"
                color="primary"
                href="localhost:3000"
              >
                Add another item
              </Button>
              <div className="absolute top-[570px] left-[248px]">Quantity</div>
              <div className="absolute top-[570px] left-[347px]">Price</div>
              <div className="absolute top-[569px] left-[450px]">Total</div>
              <TextField
                className="[border:none] bg-[transparent] absolute top-[594px] left-[247px]"
                sx={{ width: 80 }}
                color="primary"
                variant="outlined"
                type="text"
                label="0"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent] absolute top-[594px] left-[347px]"
                sx={{ width: 80 }}
                color="primary"
                variant="outlined"
                type="text"
                label="0"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <TextField
                className="[border:none] bg-[transparent] absolute top-[593px] left-[447px]"
                sx={{ width: 80 }}
                color="primary"
                variant="outlined"
                type="text"
                label="0"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <div className="absolute top-[257px] left-[361px] w-[109px] h-[21px]" />
              <div className="absolute top-[183px] left-[0px] w-[573px] h-[239px] text-5xl">
                <b className="absolute top-[0px] left-[0px]">Client</b>
                <b className="absolute top-[0px] left-[346px]">Invoice</b>
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[39px] left-[0px]"
                  sx={{ width: 227 }}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Client Name"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[39px] left-[346px]"
                  sx={{ width: 227 }}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Invoice From"
                  size="medium"
                  margin="none"
                />
                <div className="absolute top-[55px] left-[361px] w-[136px] h-[19px] text-base text-lightslategray">
                  <div className="absolute top-[0px] left-[0px]">
                    <span>{`Invoice From `}</span>
                    <span className="text-gray-100">MYM</span>
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[99px] left-[0px]"
                  sx={{ width: 227 }}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Client Email"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[159px] left-[0px]"
                  sx={{ width: 227 }}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Client Details (Optional)"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[99px] left-[346px]"
                  sx={{ width: 227 }}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Invoice Details (Optional)"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className="absolute top-[467px] left-[4px] text-xs text-lightslategray flex items-center w-[286px]">
                <span className="[line-break:anywhere] w-full">
                  <span>{`Automatically pay invoice with the card on file for this client. `}</span>
                  <b>Note: Auto Pay</b>
                  <span>
                    {" "}
                    only works for the clients who have already paid through
                    AgenciFlow.
                  </span>
                </span>
              </div>
              <div className="absolute top-[439px] left-[399px] text-lightslategray">
                Remove Payment
              </div>
              <div className="absolute top-[-5px] left-[0px] w-[576px] h-[168px] text-5xl">
                <b className="absolute top-[0px] left-[0px]">Type</b>
                <b className="absolute top-[0px] left-[346px]">Currency</b>
                <FormControlLabel
                  className="absolute top-[39px] left-[0px]"
                  label="Single Invoice"
                  labelPlacement="end"
                  control={<Radio color="primary" checked size="small" />}
                />
                <AntDropdown
                  className="absolute top-[39px] left-[346px]"
                  overlay={
                    <AntMenu>
                      {(
                        [
                          { value: "EUR" },
                          { value: "RMB" },
                          { value: "INR" },
                        ] as any
                      ).map((option: any, index: number) => (
                        <AntMenu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </AntMenu.Item>
                      ))}
                    </AntMenu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                  arrow={true}
                >
                  <AntButton onClick={(e) => e.preventDefault()}>
                    {`USD `}
                    <DownOutlined />
                  </AntButton>
                </AntDropdown>
                <FormControlLabel
                  className="absolute top-[99px] left-[0px]"
                  label="Retainers"
                  labelPlacement="end"
                  control={<Radio color="primary" checked size="small" />}
                />
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[99px] left-[346px]"
                  sx={{ width: 227 }}
                  color="info"
                  variant="standard"
                  type="date"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon>calendar_today_sharp</Icon>
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  margin="none"
                />
                <div className="absolute top-[154px] left-[3px] text-xs text-lightslategray flex items-center w-[227px]">
                  (Invoice sent quarterly, monthly or weekly)
                </div>
                <div className="absolute top-[154px] left-[349px] w-[227px] h-3.5 text-xs text-lightslategray">
                  <div className="absolute top-[0px] left-[0px] flex items-center w-[227px]">
                    Due Date
                  </div>
                </div>
              </div>
              <img
                className="absolute h-[3.89%] w-[4.36%] top-[84.01%] right-[1.05%] bottom-[12.1%] left-[94.59%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector10.svg"
              />
            </div>
            <div className="absolute top-[190px] left-[259px]" />
            <div className="absolute top-[452px] left-[31px] w-[115px] h-10 text-lightslategray">
              <div className="absolute top-[11px] left-[50px]">Auto Pay</div>
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/toggle.svg"
              />
            </div>
            <img
              className="absolute top-[453px] left-[376px] w-10 h-10 overflow-hidden"
              alt=""
              src="/toggle1.svg"
            />
            <div className="absolute h-[calc(100%_-_125px)] top-[25px] right-[15px] bottom-[100px] w-[11px] overflow-hidden">
              <div className="absolute top-[1px] left-[1px] rounded-9xs-5 bg-gray-200 box-border w-[9px] h-[413px] border-[1px] border-solid border-gray-400" />
            </div>
          </div>
        </div>
        <div className="absolute top-[78px] left-[707px] rounded-t-none rounded-br-xl rounded-bl-none bg-gray-300 box-border w-[550px] h-[806px] overflow-hidden text-lightslategray border-[2px] border-solid border-darkslategray-100">
          <div className="absolute top-[20px] left-[33px] w-[484px] h-[582px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-200 box-border w-[484px] h-[582px] overflow-hidden border-[1px] border-solid border-darkslategray-100">
              <div className="absolute top-[25px] left-[20px] w-[444px] h-[541px]">
                <img
                  className="absolute top-[250px] left-[0px] w-[444px] h-0.5"
                  alt=""
                  src="/vector-75.svg"
                />
                <b className="absolute top-[158px] left-[118px] text-5xl text-gray-100">
                  Invoice from MYM
                </b>
                <div className="absolute top-[192px] left-[109px]">
                  Invoice #1001 | 22nd Feb, 2023
                </div>
                <div className="absolute top-[291px] left-[40px]">Summary</div>
                <div className="absolute top-[291px] left-[223px]">Price</div>
                <div className="absolute top-[291px] left-[300px]">Qty</div>
                <div className="absolute top-[291px] left-[366px]">Total</div>
                <div className="absolute top-[325px] left-[221px] text-gray-100">
                  $0.00
                </div>
                <div className="absolute top-[325px] left-[364px] text-gray-100">
                  $0.00
                </div>
                <div className="absolute top-[325px] left-[309px] text-gray-100">
                  0
                </div>
                <img
                  className="absolute top-[18px] left-[124px] rounded-3xs w-[195px] h-[122px] object-cover"
                  alt=""
                  src="/screenshot-20230222-at-819-1@2x.png"
                />
              </div>
              <img
                className="absolute top-[25px] left-[488px] w-8 h-8 overflow-hidden"
                alt=""
                src="/materialsymbolsmorevert.svg"
              />
              <div className="absolute top-[518px] left-[150px] flex flex-row items-center justify-start gap-[15px] text-xl text-gray-100">
                <div className="relative">Total Amount</div>
                <b className="relative">$0.00</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1512px] h-[100px] overflow-hidden font-inter">
        <div className="absolute top-[35px] left-[60px] w-[155px] h-[30px] text-lg-9">
          <img
            className="relative w-[29.99px] h-[30px]"
            alt=""
            src="/subtract.svg"
          />
          <div className="absolute top-[3.95px] left-[45.77px] w-[109.23px] h-[23.06px]">
            <b className="absolute top-[0px] left-[0px] flex items-center w-[109.23px] h-[23.06px]">
              AgenciFlow
            </b>
          </div>
        </div>
        <img
          className="absolute top-[34px] left-[1324px] w-8 h-8 overflow-hidden"
          alt=""
          src="/mdibellnotificationoutline2.svg"
        />
        <img
          className="absolute top-[30px] left-[1428px] w-10 h-10"
          alt=""
          src="/group-340505.svg"
        />
        <div className="absolute top-[34px] left-[286px] w-[744px] h-[30px] font-helvetica-neue">
          <div className="absolute top-[0px] left-[0px] w-[744px] h-[30px]">
            <div className="absolute top-[1px] left-[0px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[12px] w-[82px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[214px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[29px] w-12 h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Teams
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[320px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[27px] w-[51px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Clients
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[426px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[32px] w-[42px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Tasks
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[532px] rounded-[7.87px] bg-steelblue-100 w-[106px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[26px] w-[54px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Boards
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[638px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[22px] w-[62px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Invoices
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1px] left-[106px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
            <div className="absolute top-[4px] left-[35px] w-[35px] h-5">
              <div className="absolute top-[0px] left-[0px] font-medium">
                Chat
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[25px] left-[1104px] rounded-3xs bg-gray-200 w-[200px] h-[50px] overflow-hidden">
          <img
            className="absolute top-[9px] left-[9px] w-8 h-8 overflow-hidden"
            alt=""
            src="/icroundsearch1.svg"
          />
          <div className="absolute top-[16px] left-[50px] font-medium">
            Search
          </div>
        </div>
        <img
          className="absolute top-[34px] left-[1376px] w-8 h-8 overflow-hidden"
          alt=""
          src="/uiwsetting.svg"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1512px] h-[100px] overflow-hidden font-helvetica-neue">
          <a className="[text-decoration:none] absolute top-[31px] left-[1427px] w-[38px] h-[38px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-[38px] h-[38px]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-[38px] h-[38px] object-cover"
              alt=""
              src="/ellipse-889@2x.png"
            />
          </a>
          <div className="absolute top-[29px] left-[1164px] rounded-3xs bg-gray-200 w-[148px] h-[42px] overflow-hidden">
            <img
              className="absolute h-[39.62%] w-[10.77%] top-[30.95%] right-[79.09%] bottom-[29.43%] left-[10.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[26.19%] left-[31.08%] font-medium">
              Search
            </div>
          </div>
          <div className="absolute top-[1px] left-[180px] w-[955px] h-[100px] overflow-hidden text-center">
            <div className="absolute top-[35px] left-[20px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[135px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Chat
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[250px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Projects
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[365px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Clients
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[480px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Tasks
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[595px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Boards
                </div>
              </div>
            </div>
            <MuiButton
              className="absolute top-[35px] left-[710px]"
              sx={{ width: 110 }}
              variant="contained"
              color="primary"
            >
              Invoices
            </MuiButton>
            <a className="[text-decoration:none] absolute top-[35px] left-[825px] rounded-md w-[110px] h-[30px] overflow-hidden text-[inherit]">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  AI Assistant
                </div>
              </div>
            </a>
          </div>
          <img
            className="absolute h-[30%] w-[1.59%] top-[35%] right-[10.31%] bottom-[35%] left-[88.1%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/notification.svg"
          />
          <img
            className="absolute h-[30%] w-[1.98%] top-[35%] right-[6.94%] bottom-[35%] left-[91.07%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/settings.svg"
          />
          <img
            className="absolute top-[32px] left-[60px] w-[86px] h-[35.44px]"
            alt=""
            src="/logo.svg"
          />
        </div>
      </div>
      <div className="absolute top-[100px] left-[40px] rounded-xl box-border w-[145px] h-[660px] overflow-hidden text-center border-[2px] border-solid border-darkslategray-100">
        <div className="absolute top-[20px] left-[20px] rounded-3xs bg-steelblue-100 w-[104px] h-[95px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[63px] left-[21px] font-medium flex items-center justify-center w-[62px] h-3.5">
            Invoices
          </div>
          <img
            className="absolute h-[37.89%] w-[34.61%] top-[17.89%] right-[32.7%] bottom-[44.21%] left-[32.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[335px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices13"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[63px] left-[25px] font-medium flex items-center justify-center w-[54px] h-3.5">
            Clients
          </div>
          <img
            className="absolute h-[37.89%] w-[44.74%] top-[17.89%] right-[26.42%] bottom-[44.21%] left-[28.85%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[440px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices14"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[17px] font-medium flex items-center justify-center w-[70px] h-[15px]">
            Reports
          </div>
          <img
            className="absolute h-[37.89%] w-[27.69%] top-[16.84%] right-[35.77%] bottom-[45.26%] left-[36.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[545px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices15"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[17px] font-medium flex items-center justify-center w-[70px] h-[15px]">
            Stripe
          </div>
          <img
            className="absolute top-[16px] left-[34px] w-9 h-9 overflow-hidden"
            alt=""
            src="/teams2.svg"
          />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[125px] left-[21px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices11"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <a className="[text-decoration:none] absolute top-[63px] left-[16px] font-medium text-[inherit] flex items-center justify-center w-[72px] h-3.5">
            Summary
          </a>
          <img
            className="absolute h-[37.89%] w-[27.69%] top-[17.89%] right-[35.77%] bottom-[44.21%] left-[36.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
          <img className="relative w-0 h-0" alt="" />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[230px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices12"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[5px] font-medium flex items-center justify-center w-[94px] h-[15px]">
            Subscription
          </div>
          <img className="relative w-[29.45px] h-9" alt="" src="/union1.svg" />
          <img
            className="relative w-[11px] h-[9.22px]"
            alt=""
            src="/subtract1.svg"
          />
        </Link>
        <div className="absolute top-[20px] left-[20px] rounded-3xs bg-gray-200 w-[105px] h-[50px] overflow-hidden hidden text-left">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[15px] left-[32px] font-medium">
            Clients
          </div>
          <img
            className="relative w-[8.41px] h-3.5"
            alt=""
            src="/subtract2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
