import ServiceNav from "src/components/nav/ServiceNav";

const PrivacyPolicyContainer = () => {
  return (
    <div className="mx-auto max-w-[960px] border-t px-4 py-16 lg:py-36">
      <h2 className="mb-12 text-center text-4xl">Privacy Policy</h2>
      <ServiceNav />
      <div className="tab_inner active">
        <select
          name=""
          id=""
          className="form-select mb-8 rounded border-gray-300 text-sm font-semibold text-gray-900 transition focus:border-gray-700 focus:ring-0"
        >
          <option value="">Privacy Policy Effective Date : 2023-01-09</option>
        </select>

        <div className="mb-8 flex flex-col gap-2">
          <p className="mb-4">
            {`RIU Co., Ltd. (hereinafter referred to as the "Company") values the
            personal information of customers and complies with relevant laws
            such as the "Personal Information Protection Act". Through the
            personal information processing policy, the company informs you of
            the purpose and method of using the personal information provided by
            customers and what measures are being taken to protect personal
            information.`}
          </p>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Personal Information Collected at Service Use
            </h4>
            <p className="mb-2">
              The company collects the following personal information for
              membership registration, consultation, service application, etc.
            </p>
            <ol className="ml-4 mb-2 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                When signing up for membership: name, email, password, company
                name, country
              </li>
              <li>When applying for service: Address</li>
            </ol>
            <em className="text-gray-400">
              Service use records, access logs, cookies, access IPs, payment
              records, and bad use records may be created and collected during
              the service use process or business process.
            </em>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              How to Collect Personal Information
            </h4>
            <p className="mb-2">
              Collection through website, written form, bulletin board, e-mail,
              event application, delivery request, telephone, fax, and generated
              information collection tool
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Personal Information Collection and Purpose of Use
            </h4>
            <p className="mb-2">
              The company uses the collected personal information for the
              following purposes.
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                Implementation of contracts for service provision and settlement
                of fees according to service provision
              </li>
              <li>
                Provision of content, purchase and payment, delivery of goods or
                billing, identity verification for financial transactions, and
                financial services
              </li>
              <li>Member management</li>
              <li>
                Identification according to the use of membership service,
                personal identification, prevention of fraudulent use of bad
                members and unauthorized use, confirmation of intention to join,
                handling complaints such as complaints, delivery of notices
              </li>
              <li>Use for marketing and advertising</li>
              <li>
                Delivery of advertising information such as events,
                identification of access frequency, or statistics on service use
                by members
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Retention and use period of personal information
            </h4>
            <p className="mb-2">
              In principle, after the purpose of collecting and using personal
              information is achieved, the information is destroyed without
              delay. However, the following information is retained for the
              specified period for the following reasons
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                Reasons for information retention according to company internal
                policy
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    Even if a member has withdrawn, the member{`'`}s information
                    can be retained for one year from the date of termination of
                    the use contract in order to prevent the recurrence of
                    fraudulent use by bad members, resolve disputes, and
                    cooperate with the request of investigative agencies.
                  </li>
                </ul>
              </li>
              <li>
                Reasons for retaining information according to relevant laws and
                regulations
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    If it is necessary to preserve it in accordance with the
                    provisions of related laws, such as the Consumer Protection
                    Act in Electronic Commerce, etc., the company keeps member
                    information for a certain period of time as set forth in the
                    relevant laws and regulations as follows.
                  </li>
                </ul>
              </li>
              <li>
                Records on contract or subscription withdrawal, etc.
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    Reason for preservation: Act on Consumer Protection in
                    Electronic Commerce, etc.
                  </li>
                  <li>Retention period: 5 years</li>
                </ul>
              </li>
              <li>
                Records on payment and supply of goods, etc.
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    Reason for preservation: Act on Consumer Protection in
                    Electronic Commerce, etc.
                  </li>
                  <li>Retention period: 5 years</li>
                </ul>
              </li>
              <li>
                Records on consumer complaints or dispute handling
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    Reason for preservation: Act on Consumer Protection in
                    Electronic Commerce, etc.
                  </li>
                  <li>Retention period: 3 years</li>
                </ul>
              </li>
              <li>
                log record
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    Reason for retention: Protection of Communications Secrets
                    Act
                  </li>
                  <li>Retention period: 3 months</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Destruction procedure and method of personal information
            </h4>
            <p className="mb-2">
              In principle, the company destroys the information without delay
              after the purpose of collecting and using personal information is
              achieved. The destruction procedure and method are as follows.
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                <h6 className="font-semibold">Destruction procedure</h6>
                <p className="mb-2">
                  The information entered by the member for membership
                  registration, etc. is transferred to a separate DB after the
                  purpose is achieved (separate filing cabinet in the case of
                  paper) and is subject to information protection according to
                  internal policies and other related laws (refer to retention
                  and use period). It is destroyed after being stored for a
                  period of time.
                </p>
                <p className="mb-2">
                  Personal information transferred to a separate DB is not used
                  for any purpose other than being retained unless otherwise
                  required by law.
                </p>
              </li>
              <li>
                <h6 className="font-semibold">Destruction method</h6>
                Personal information stored in the form of electronic files is
                deleted using a technical method that cannot reproduce the
                record.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Provision of personal information</h4>
            <p className="mb-2">
              In principle, the company does not provide the user{`'`}s personal
              information to the outside world. However, the following cases are
              exceptions.
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>When users agree in advance</li>
              <li>
                In accordance with the provisions of the law or in accordance
                with the procedures and methods set forth in the law for the
                purpose of investigation, if there is a request from the
                investigative agency
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Consignment of collected personal information
            </h4>
            <p className="mb-2">
              RIU uses members{`'`} personal information within the scope
              notified in the {`'`}Purpose of Use{`'`}, and does not use the
              member{`'`}s personal information beyond the scope without prior
              consent from the member, or in principle, does not provide the
              member{`'`}s personal information to a third party or disclose it
              to the outside world. . However, each of the following cases is an
              exception.
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>When members agree to disclose in advance</li>
              <li>
                In accordance with the provisions of the law or in accordance
                with the procedures and methods set forth in the law for the
                purpose of investigation, if there is a request from the
                investigative agency
              </li>
              <li>
                When a transaction is concluded through the services provided by
                RIU, information related to the contract between the parties is
                provided to both parties within the necessary scope.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Rights of users and legal representatives and how to exercise them
            </h4>
            <p className="mb-2">
              Users can view or modify their registered personal information at
              any time, and may request cancellation of membership.
            </p>
            <p className="mb-2">
              {`To view or modify personal information of users, click "Change
              personal information" (or "Edit member information", etc.). Or you
              can opt out. Or, if you contact the person in charge of personal
              information protection in writing, by phone or e-mail, we will
              take action without delay.`}
            </p>
            <p className="mb-2">
              If you request correction of an error in personal information, the
              personal information will not be used or provided until the
              correction is completed. In addition, if wrong personal
              information has already been provided to a third party, the result
              of the correction will be notified to the third party without
              delay so that the correction can be made.
            </p>
            <p className="mb-2">
              {`The company handles personal information that has been terminated
              or deleted at the user's request as specified in the "Period
              of Retention and Use of Personal Information Collected by the
              Company" and prevents it from being viewed or used for any other
              purpose.`}
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Matters concerning the installation, operation, and refusal of
              automatic personal information collection devices
            </h4>
            <p className="mb-2">
              {`The company operates "cookies" that store and find your
              information from time to time. A cookie is a very small text file
              sent to your browser by the server used to run the website and
              stored on your computer's hard disk.`}
            </p>
            <p className="mb-2">
              The company uses cookies for the following purposes.
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                <h6 className="font-semibold">
                  Purpose of use of cookies, etc.
                </h6>
                <p className="mb-2">
                  Provides targeted marketing and personalized services by
                  analyzing the access frequency and visit time of members and
                  non-members, identifying users{`'`} tastes and areas of
                  interest, tracking traces, and identifying the degree of
                  participation in various events and the number of visits
                </p>
                <p className="mb-2">
                  You have a choice about installing cookies. Therefore, you can
                  allow all cookies by setting options in your web browser, go
                  through confirmation whenever a cookie is saved, or refuse to
                  save all cookies.
                </p>
              </li>
              <li>
                <h6 className="font-semibold">
                  How to Opt Out of Setting Cookies
                </h6>
                <p className="mb-2">
                  As a method of rejecting cookie settings, you can allow all
                  cookies by selecting the option of the web browser you are
                  using, go through confirmation every time a cookie is saved,
                  or refuse to save all cookies.
                </p>
                <p className="mb-2">
                  Example of setting method (in case of Internet Explorer):
                  Tools at the top of the web browser {`>`} Internet Options{" "}
                  {`>`}
                  Personal Information
                </p>
              </li>
            </ol>
            <p className="mb-2">
              However, if you refuse to install cookies, there may be
              difficulties in providing services.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Civil complaint service regarding personal information
            </h4>
            <p className="mb-2">
              In order to protect customers{`'`} personal information and handle
              complaints related to personal information, the company appoints
              the relevant department and personal information manager as
              follows.
            </p>
            <h6 className="mb-2 font-semibold">
              Personal Information Protection Officer
            </h6>
            <table className="mb-2 w-full border-collapse border border-slate-400">
              <tbody>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3">
                    Name
                  </th>
                  <td className="border border-slate-300 p-3">Go Young-jae</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3">
                    Affiliation
                  </th>
                  <td className="border border-slate-300 p-3">RIU Co., Ltd</td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3">
                    Phone
                  </th>
                  <td className="border border-slate-300 p-3">
                    (+82) 010-5502-7515
                  </td>
                </tr>
                <tr>
                  <th className="border border-slate-300 bg-slate-50 p-3">
                    Email
                  </th>
                  <td className="border border-slate-300 p-3">
                    riu-customer@riupack.com
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mb-2">
              You can report all complaints related to personal information
              protection that occur while using the company{`'`}s services to
              the person in charge of personal information protection or the
              department in charge.
            </p>
            <p className="mb-2">
              The company will provide prompt and sufficient answers to users
              {`'`}
              reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContainer;
