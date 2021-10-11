import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <h1 className="hidden lg:block opacity-20 text-6xl pointer-events-none absolute bottom-8 right-3 ">
        PORTFOLIO
      </h1>
      <article className="my-2 lg:my-6 lg:mr-16 lg:ml-4 text-justify">
        <section className="p-2">
          <h2 className="text-4xl font-bold pb-2 text-yellow-200">Projects</h2>
          <div className="pb-4 text-xl indent-2">
            Here are the details of the projects I've previous worked on:
          </div>
          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">
            FCA
          </h3>
          <table className="pb-4 text-base indent-2">
            <tr>
              <td>Project Name</td>
              <td>: Regdata and EDP AM</td>
            </tr>
            <tr>
              <td>Client</td>
              <td>: FCA</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>: Data Migration</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td>: AWS, Putty, MySQL</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>: October 2020 - July 2021</td>
            </tr>
          </table>
          <h4 className = "text-xl p-1 font-semibold text-yellow-200 indent-1"> Description : </h4>

          <div className="pb-4 text-base ml-8 indent-2">
          The <b>Financial Conduct Authority</b> (FCA) is a financial regulatory body in the United Kingdom, but operates independently of the UK Government, and is financed by charging fees to members of the financial services industry. The FCA regulates financial firms providing services to consumers and maintains the integrity of the financial markets in the United Kingdom.
          </div>
          <h4 className = "text-xl p-1 font-semibold text-yellow-200 indent-1"> Responsibilities : </h4>
          <ul className="pb-4 text-base ml-10">
            <li>Interacted with client to understand their requirements</li>
            <li>Working with CTS and FCA team to Migrate data from Gabriel to regdata</li>
            <li>Monitoring running jobs</li>
            <li>Data import to Oracle RDS from Gabriel dump file in S3</li>
            <li>Running Python scripts in putty to perform various tasks</li>
          </ul>

          <h3 className="text-2xl font-semibold p-1.5 text-yellow-200 ">
            Capita
          </h3>
          <table className="pb-4 text-base indent-2">
            <tr>
              <td>Project Name</td>
              <td>: Capita ALAC</td>
            </tr>
            <tr>
              <td>Client</td>
              <td>: Capita</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td>: Unisure, ABSuit, SQL Server 2013</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>: September 2017 - October 2020</td>
            </tr>
          </table>
          <h4 className = "text-xl p-1 font-semibold text-yellow-200 indent-1"> Description : </h4>

          <div className="pb-4 text-base ml-8 indent-2">
          <b>Capita</b> is UK's largest provider of technology enabled, business process management and integrated professional support service solutions to the life and pension industry. It works in partnership with 21 well known financial service providers administrating 17 million lives, savings and pensions policies on their behalf.
          </div>
          <h4 className = "text-xl p-1 font-semibold text-yellow-200 indent-1"> Roles and responsibilities : </h4>
          <ul className="pb-4 text-base ml-10">
            <li>Involved in Development and maintanace of Unisure Application</li>
            <li>Handling of Unisure ABS &amp; Depcon Monthly and Ad-Hoc implementations</li>
            <li>Worked on BMC Remedy Tool to cater the incidents and issues raised by users</li>
            <li>Build and run TSQL queries to resolve any issues in database</li>
            <li>Worked with onshore Capita team to resolve many critical issues</li>
          </ul>
        </section>
      </article>
    </>
  );
}

export default Portfolio;
