import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <h1 className="aboutHeader opacity-20 lg:text-6xl text-4xl pointer-events-none lg:absolute lg:bottom-8 lg:right-3 ">
        PORTFOLIO
      </h1>
      <article className="-mt-10 lg:mt-0 mb-0 lg:my-2 lg:my-6 lg:mr-16 lg:ml-4 md:text-justify">
        <section className="p-2">
          <h2 className="text-4xl font-bold pb-2 text-yellow-200">Projects</h2>
          <div className="pb-4 text-base md:text-xl indent-2">
            Here are the details of the projects I've previous worked on:
          </div>
          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">FCA</h3>
          <table className="ml-2 md:ml-10 mb-2 md:mb-4 text-sm md:text-base md:indent-2 border-collapse table-auto">
            <tr>
              <td className = "border px-1 border-gray-400" >Project Name</td>
              <td className = "border px-1 border-gray-400" >Regdata and EDP AM</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Client</td>
              <td className = "border px-1 border-gray-400" >FCA</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Role</td>
              <td className = "border px-1 border-gray-400" >Data Migration</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Environment</td>
              <td className = "border px-1 border-gray-400" >AWS, Putty, MySQL</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Duration</td>
              <td className = "border px-1 border-gray-400" >October 2020 - July 2021</td>
            </tr>
          </table>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            
            Description :
          </h4>

          <div className="pb-4 text-sm md:text-base ml-4 md:ml-8 indent-2">
            The <b>Financial Conduct Authority</b> (FCA) is a financial
            regulatory body in the United Kingdom, but operates independently of
            the UK Government, and is financed by charging fees to members of
            the financial services industry. The FCA regulates financial firms
            providing services to consumers and maintains the integrity of the
            financial markets in the United Kingdom.
          </div>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Responsibilities :{" "}
          </h4>
          <ul className="pb-4 text-sm md:text-base ml-6 md:ml-10 resps">
            <li>Interacted with client to understand their requirements</li>
            <li>
              Working with CTS and FCA team to Migrate data from Gabriel to
              regdata
            </li>
            <li>Monitoring running jobs</li>
            <li>Data import to Oracle RDS from Gabriel dump file in S3</li>
            <li>Running Python scripts in putty to perform various tasks</li>
          </ul>

          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">
            Capita
          </h3>
          <table className="ml-2 md:ml-10 mb-2 md:mb-4 text-sm md:text-base md:indent-2 border-collapse table-auto">
            <tr>
              <td className = "border px-1 border-gray-400" >Project Name</td>
              <td className = "border px-1 border-gray-400" >Capita ALAC</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Client</td>
              <td className = "border px-1 border-gray-400" >Capita</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Environment</td>
              <td className = "border px-1 border-gray-400" >Unisure, ABSuit, SQL Server 2013</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Duration</td>
              <td className = "border px-1 border-gray-400" >September 2017 - October 2020</td>
            </tr>
          </table>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Description :{" "}
          </h4>

          <div className="pb-4 text-sm md:text-base ml-4 md:ml-8 indent-2">
            <b>Capita</b> is UK's largest provider of technology enabled,
            business process management and integrated professional support
            service solutions to the life and pension industry. It works in
            partnership with 21 well known financial service providers
            administrating 17 million lives, savings and pensions policies on
            their behalf.
          </div>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Roles and responsibilities :{" "}
          </h4>
          <ul className="pb-4 text-sm md:text-base ml-6 md:ml-10 resps">
            <li>
              Involved in Development and maintanace of Unisure Application
            </li>
            <li>
              Handling of Unisure ABS &amp; Depcon Monthly and Ad-Hoc
              implementations
            </li>
            <li>
              Worked on BMC Remedy Tool to cater the incidents and issues raised
              by users
            </li>
            <li>
              Build and run TSQL queries to resolve any issues in database
            </li>
            <li>
              Worked with onshore Capita team to resolve many critical issues
            </li>
          </ul>

          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">
            Tesco
          </h3>
          <table className="ml-2 md:ml-10 mb-2 md:mb-4 text-sm md:text-base md:indent-2 border-collapse table-auto">
            <tr>
              <td className = "border px-1 border-gray-400" >Project Name</td>
              <td className = "border px-1 border-gray-400" >Tesco Colleagues</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Client</td>
              <td className = "border px-1 border-gray-400" >Tesco</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Environment</td>
              <td className = "border px-1 border-gray-400" >IBM mainframe</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Duration</td>
              <td className = "border px-1 border-gray-400" >April 2017 - September 2017</td>
            </tr>
          </table>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Description :{" "}
          </h4>

          <div className="pb-4 text-sm md:text-base ml-4 md:ml-8 indent-2">
            <b>Tesco PLC</b>, is a British multinational groceries and general
            merchandise retailer headquartered in Welwyn Garden City, England.
            It is the third-largest retailer in the world measured by gross
            revenues and the ninth-largest in the world measured by revenues. It
            has shops in five countries across Europe, and is the market leader
            of groceries in the UK.
          </div>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Roles and responsibilities :{" "}
          </h4>
          <ul className="pb-4 text-sm md:text-base ml-6 md:ml-10 resps">
            <li>
              Involved in Development and enhancement of Applications using JCL,
              VSAM, VS COBOL, DB2
            </li>
            <li>
              Follow coding standards and development of programs and jobs using
              JCL, VS COBOL, VSAM, DB2, CICS
            </li>
            <li>
              Analyzing modifications, finding affected list of programs and
              homogenious implementation
            </li>
            <li>Handling Ad-Hoc requests</li>
          </ul>

          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">
            Barclays
          </h3>
          <table className="ml-2 md:ml-10 mb-2 md:mb-4 text-sm md:text-base md:indent-2 border-collapse table-auto">
            <tr>
              <td className = "border px-1 border-gray-400" >Project Name</td>
              <td className = "border px-1 border-gray-400" >Barclays corporate Banking division</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Client</td>
              <td className = "border px-1 border-gray-400" >Barclays</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Environment</td>
              <td className = "border px-1 border-gray-400" >IBM Mainframe</td>
            </tr>
            <tr>
              <td className = "border px-1 border-gray-400" >Duration</td>
              <td className = "border px-1 border-gray-400" >September 2016 - March 2017</td>
            </tr>
          </table>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Description :{" "}
          </h4>

          <div className="pb-4 text-sm md:text-base ml-4 md:ml-8 indent-2">
            <b>Barclays PLC</b> is a british multinational investment bank and
            financial services company, headquartered in London, England. Apart
            from investment banking, Barclays is organised into four core
            businesses: personal banking, corporatebanking, wealth, and
            investment management.
          </div>
          <h4 className="text-xl p-1 ml-2 md:ml-4 font-semibold text-yellow-200">
            {" "}
            Roles and responsibilities :{" "}
          </h4>
          <ul className="pb-4 text-sm md:text-base ml-6 md:ml-10 resps">
            <li>
              Involved in Development and enhancement of Applications using JCL,
              VSAM, VS COBOL, DB2
            </li>
            <li>
              Follow coding standards and development of programs and jobs using
              JCL, VS COBOL, VSAM, DB2, CICS
            </li>
            <li>
              Analyzing modifications, finding affected list of programs and
              homogenious implementation
            </li>
            <li>Handling Ad-Hoc requests</li>
          </ul>
        </section>
      </article>
    </>
  );
}

export default Portfolio;
