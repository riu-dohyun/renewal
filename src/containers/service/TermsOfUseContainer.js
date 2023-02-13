import ServiceNav from "src/components/nav/ServiceNav";

const TermsOfUseContainer = () => {
  return (
    <div className="mx-auto max-w-[960px] border-t px-4 py-16 lg:py-36">
      <h2 className="mb-12 text-center text-4xl">Terms &amp; Service</h2>
      <ServiceNav />
      <div className="tab_inner active">
        <select
          name=""
          id=""
          className="form-select mb-8 rounded border-gray-300 text-sm font-semibold text-gray-900 transition focus:border-gray-700 focus:ring-0"
        >
          <option value="">
            Terms &amp; Service Effective Date : 2023-01-09
          </option>
        </select>

        <div className="mb-8 flex flex-col gap-2">
          <h3 className="mb-4 text-3xl">Chapter 1 Service Use</h3>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 1 (Purpose)</h4>
            <p>
              {`The purpose of these Terms is to prescribe the rights,
              obligations, responsibilities, and other essential items between
              RIU CO., LTD. and the members in connection with the service use
              provided to the members by RIU CO., LTD. (hereinafter "RIU").`}
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 2 (Definitions)</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                {`"Member" means a person who agrees to these Terms and completes
                the membership process (meaning entire service platforms such as
                websites and applications, etc. managed and operated by RIU,
                including PACKPOSS (online packaging brokerage platform,
                www.PACKPOSS.com).`}
              </li>
              <li>
                {`The term "Buyer" means a member who has become a member to
                purchase packaging.`}
              </li>
              <li>
                {`The term "Supplier" means a member who has become a member to
                sell packaging to the Client.`}
              </li>
              <li>
                {`The term "Service" means an online service that allows members
                to post self-written information to find suitable trading
                partners on the PACKPOSS so that other members can see it, and
                provides the brokerage for transaction contract between members
                and a payment protection system.`}
              </li>
              <li>
                {`The term "account (ID)" means a combination of letters, No.s, or
                special characters selected by members and granted by the
                PACKPOSS for the identification of members and the service use.`}
              </li>
              <li>
                {`The term "password" means a combination of letters, No.s, or
                special letters selected and managed confidentially by the
                member himself/herself in order to confirm that the member is a
                member consistent with the account (ID) assigned to him/her and
                to protect the information and rights of the member.`}
              </li>
              <li>
                {`The term "account information" includes general information,
                such as a member's account (ID), password, company name, etc.
                provided to the PACKPOSS, service use information, etc.`}
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 3 (Specification and Amendment of Terms of Service)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                RIU will notify the members by posting on the PACKPOSS or
                providing a bridging shot so that the members can know the
                contents of these Terms.
              </li>
              <li>
                RIU will take measures to ensure that members can have a Q&A
                session regarding the PACKPOSS and the contents of these Terms.
              </li>
              <li>
                RIU may amend these Terms within the limits that they do not
                violate related statutes, such as the Act on the Regulation of
                the Terms.
              </li>
              <li>
                In case of amending the Terms, RIU shall specify the effective
                date, amendment content, and reason for the amendment to notify
                at least 7 days before (30 days before to change matters that
                are unfavorable or important to members) the effective date
                until a significant period has passed after the effective date
                through the initial screen or the bridging shot.
              </li>
              <li>
                {`In case RIU amends the Terms, they shall check the members'
                consent to the application of the amended Terms after announcing
                the amended Terms in principle. However, if the member does not
                express acceptance or rejection when notifying the amended
                Terms, and in case the content deemed to have been accepted is
                also notified, the amended Terms may be deemed to have been
                accepted.`}
              </li>
              <li>
                If the member disagrees with the application of the amended
                Terms, the member may terminate the contract for the use of the
                PACKPOSS service.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 4 (Membership)</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                A person who intends to become a member must agree to the Terms
                and apply for use by filling out the form provided on the
                membership page of PACKPOSS.
              </li>
              <li>
                To use the services provided by the PACKPOSS, such as estimate
                request registration by a Client or participation in the bidding
                by a Partner even after signing the membership in section 1,
                additional information such as company name, main No., mobile
                phone No., Partner information, company introduction, task
                officer, portfolio, delivery performance in PACKPOSS, production
                equipment, certificate, status information, etc. must be
                entered, and the use of the service may be restricted without
                those information inputs.
              </li>
              <li>
                RIU may ask for real-name verification, identification, other
                necessary information, etc. for a person who intends to become a
                member, and the procedures and methods shall be by the related
                statutes.
              </li>
              <li>
                A person who intends to become a member shall input the actual
                information in the information item required in section 1 and
                section 2 at the time of application for use. In case of false
                input of information to join including company name or the
                illegal use of others’ names, the membership rights under these
                Terms shall not be claimed, and RIU may cancel or terminate the
                service contract without a refund.
              </li>
              <li>
                {`Membership shall be made by the member’s consent to the Terms
                and RIU's acceptance to the member’s application for use.
                Consent to the Terms shall be expressed by selecting Accept the
                Terms of PACKPOSS at the time of application for use or by using
                another button to consent or by signatures.`}
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 5 (Acceptance and Restriction of the Application for Use)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                In case the person who intends to become a member makes a
                reasonable application for use as prescribed in Article 4, RIU
                accepts the application unless there is a huge problem.
              </li>
              <li>
                RIU may not accept any of the following applications for use.
                <dl className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    In case of the application for use in violation of Article
                    4.
                  </li>
                  <li>
                    In case of the application for use by the person who has a
                    record of use restriction for his/her own attributable
                    reasons.
                  </li>
                  <li>
                    In case of the application for use with the intent of
                    committing an illegal act prohibited by the statutes.
                  </li>
                  <li>
                    {`In case of the application with the intent of hindering the
                    RIU's interests.`}
                  </li>
                  <li>
                    In case of the person who has previously lost his/her
                    qualification as a member and was not accepted to rejoin the
                    membership of RIU.
                  </li>
                  <li>
                    In case the acceptance is deemed inappropriate conforming to
                    the section 1 or section 5.
                  </li>
                </dl>
              </li>
              <li>
                In case conforming to any of the followings, RIU may defer the
                acceptance until such reasons are resolved
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    In case PACKPOSS equipment cannot afford due to such as
                    various lacks of service-related capacity.
                  </li>
                  <li>In case there is a technical reason for failure.</li>
                  <li>
                    In case it is difficult to accept the application for use
                    due to other reasons conforming to any of the above.
                  </li>
                </ol>
              </li>
              <li>
                In case RIU accepts the application for use of Article 5
                requested by members, it shall be deemed that the service use
                contract has been made effectively between the member and RIU
                unless the member violates these Terms and related statutes.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 6 (Member Account and Password)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>RIU grants an account (ID) to the member.</li>
              <li>
                {`RIU shall have the authority to perform the various member
                management duties, such as determining the availability of the
                relevant member's use of service, etc. through account
                information, and may request the member to change his/her
                account or password for the following reasons.`}
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    {`In case the member's account is registered using member's
                    email, phone No., etc. being concerned to violate the
                    privacy.`}
                  </li>
                  <li>
                    In case of the application with the intent of repulsing
                    others or hindering fine custom.
                  </li>
                  <li>
                    In case it is necessary to change for security, account
                    policy, smooth provision of services, etc.
                  </li>
                  <li>In case it is deemed necessary by RIU.</li>
                </ol>
              </li>
              <li>
                {`Members should manage their account information with fiduciary
                duty. The member shall be responsible for the damages caused by
                the member's negligence in managing the account information or
                accepting the use to the third party, and RIU shall not be
                responsible unless there is RIU's intentions or faults.`}
              </li>
              <li>
                The member is responsible for the password management, and it
                can be changed whenever the member wants.
              </li>
              <li>Members should change their passwords regularly.</li>
              <li>
                {`In case the member recognizes that the account information is
                stolen or used by the third party, he/she shall immediately
                notify the RIU and follow the RIU's instructions. Any damage
                caused by failure to notify it or to follow the guidance from
                RIU, RIU is not responsible unless there is RIU's intentions or
                faults.`}
              </li>
              <li>Members must sign out at every connection termination.</li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 7 (Provision and Change of Member Information)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                In case the member is required to provide information to RIU
                under these Terms, he/she shall provide actual information and
                shall not be protected from disadvantages caused by the false
                information offering.
              </li>
              <li>
                Members can view and modify their personal information at any
                time through the PACKPOSS. However, modifications of the company
                name, account (ID), etc. required for service management may be
                restricted. In such cases, you must sign up again with a new
                account (ID), while the new account (ID) is restricted from
                re-signing.
              </li>
              <li>
                In case the information provided to RIU is changed, the member
                shall revise it online promptly or notify the RIU of the change
                in case he/she cannot modify it by themselves.
              </li>
              <li>
                {`RIU shall not be responsible for any disadvantages caused by a
                member's failure to modify the member's information according to
                section 2 or notify RIU according to section 3, and the member
                shall be responsible for any problems caused by failure to
                modify it.`}
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 8 (Personal Information Protection and Management)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                {`RIU shall endeavor to protect the personal information of
                members, including account information, etc., as prescribed by
                the related statutes. The protection and use of member's
                personal information shall be subject to the related statutes
                and the privacy policy separately notified by RIU.`}
              </li>
              <li>
                RIU shall have a security system to protect personal and credit
                information so that members can use the service safely, and
                shall notify and comply with the privacy policy. Except in the
                case as stated in the related statutes, these Terms, and the
                privacy policy, RIU shall not disclose or provide the personal
                information of members to any third party.
              </li>
              <li>
                RIU shall not be responsible for all personal and confidential
                information of others, including account information of members
                exposed due to reasons attributable to members.
              </li>
              <li>
                {`RIU can transfer member's personal information and data when
                expanding or adding services in the PACKPOSS, and can use the
                personal information and data transferred.`}
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">{`Article 9 (RIU's Obligations)`}</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                RIU shall faithfully perform the exercise and obligation as
                prescribed by the related statutes and these Terms.
              </li>
              <li>
                {`When equipment fails or data is lost while improving services
                for continuous and stable service provision, RIU shall make the
                utmost efforts to repair or restore them unless there are
                unavoidable circumstances, such as natural disasters,
                emergencies, technical defects that are difficult to resolve.
                However, If there is a partner's equipment failure or data loss
                due to intentions or negligence of a partner, RIU is exempt from
                obligation unless there is no RIU’s intentions or gross
                negligence.`}
              </li>
              <li>
                In case the loss occurs to members due to a service provided by
                RIU, they assume the responsibility only if the loss is caused
                by RIU{`'`}s intention or negligence, and the scope of the
                responsibility is limited to the general damages.
              </li>
              <li>
                In case the opinion or complaint raised by the member is deemed
                justifiable, RIU needs to be dealt with them quickly. However,
                if the prompt treatment is difficult, the member shall be
                notified of the reason and the schedule for treatment.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 10 (Member{`'`}s Obligations)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                The member shall not do any of the following deeds (or including
                the equivalent deeds).
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    Abnormal system access
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of installing and distributing programs such as
                        malignant code, viruses, etc. intentionally or
                        negligently.
                      </li>
                      <li>
                        The deed of crawling to gather information from Clients
                        and Partners.
                      </li>
                      <li>
                        The deed of transforming services, such as reproduction,
                        decomposition, or imitation, through entire processings
                        of reverse engineering, decompilation, disassembly, etc.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Abnormal service use
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of signing up with false or information of
                        other.
                      </li>
                      <li>
                        The deed of activating with multiple accounts without
                        justifiable reasons.
                      </li>
                      <li>
                        The deed of intentionally cancelling or re-signing the
                        account to delete unfavorable information in the
                        account.
                      </li>
                      <li>
                        The deed of habitually using the service with the intent
                        of deciding the estimates or purchasing availabilities
                        without intention to purchase.
                      </li>
                      <li>
                        The deed where the Client proceeds with consultations
                        after habitually registering the estimate requests and
                        does not proceed with bidding.
                      </li>
                      <li>
                        The deed of repeatedly registering the estimate requests
                        of the same or similar contents (including expenses and
                        period) against RIU{`'`}s will.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Input of false or exaggerated information
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed where the Partners inputs as a portfolio form
                        for the delivery cases that has not been traded by the
                        Partners.
                      </li>
                      <li>
                        The deed where the Partners enters the delivered
                        products differently from the truth when registering the
                        portfolio
                      </li>
                      <li>
                        The deed where the Client reduces the range than the
                        truth one or inputs false information when registering
                        the estimate request.
                      </li>
                      <li>
                        The deed of inputting false or exaggerated information
                        in entire information inputted by member when using
                        other PACKPOSS services.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Inducement of direct transaction in services with limited
                    direct transaction
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of inputting information in the PACKPOSS that
                        facilitates identification, such as business name
                        (company name), trademarks such as logos, addresses,
                        phone No.s, and email addresses, etc.
                      </li>
                      <li>
                        The deed of conducting direct transactions without pRIUr
                        consultation, excluding RIU.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Business Obstruction
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of sending plastering advertisements,
                        promotional spams, etc.
                      </li>
                      <li>
                        The deed where the Partners habitually fails to issue
                        tax invoices (including receipts, bills, specifications
                        of transaction, etc.) or issues them later than the
                        transaction date.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Offenses against Public Order
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of discriminating gender, politics, religion,
                        disability, age, social status, race, region,
                        occupation, etc. or aggravating prejudice against them.
                      </li>
                      <li>
                        The deed of discriminating or slandering RIU or other
                        members or third parties, or damaging their reputations.
                      </li>
                      <li>
                        The deed of showering abuse, verbally abusing, and
                        threatening RIU or other members or third parties.
                      </li>
                      <li>
                        The deed of registering information contrary to the fine
                        custom in PACKPOSS, such as describing excessive body
                        exposure or obscene acts, or sharing information related
                        to prostitution, or posting information that may cause
                        sexual humiliation or displeasure to others.
                      </li>
                      <li>
                        The deed of doing abnormal activities contrary to the
                        socially accepted idea, such as posting disgusting
                        photos or contents, using abuses, swearing words, and
                        slangs.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Violation of another{`'`}s rights
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of violating or being apprehensive of violating
                        intellectual property rights, such as patents,
                        trademarks, copyrights, etc. of RIU, other members and
                        third parties.
                      </li>
                      <li>
                        The deed of violating personal information of others.
                      </li>
                      <li>
                        Any deeds that may violate or being apprehensive of the
                        rights of others, such as web hacking programs, macro
                        programs, mirroring sites for voice phishing
                      </li>
                    </ul>
                  </li>
                  <li>
                    Transaction, Transfer, Proxy, Exchange, etc. of Account
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        Any deeds that may violate or being apprehensive of the
                        rights of others, such as web hacking programs, macro
                        programs, mirroring sites for voice phishing
                      </li>
                    </ul>
                  </li>
                  <li>
                    Impersonation, Illegal Use, and etc. of Other{`'`}s Name
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of impersonating other members, third parties,
                        or RIU employees.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Others
                    <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                      <li>
                        The deed of hindering RIU{`'`}s interests (sales) as a
                        deed conforming to this section
                      </li>
                      <li>
                        The deed of distributing false information with the
                        intent of giving profit in property to oneself or others
                        or damages to others
                      </li>
                      <li>
                        The deed that is prohibited by related statutes or that
                        is not permitted against morality and social norms or of
                        causing a bad influence on provision of smooth service
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                A member shall be obliged to check and comply with the
                provisions of these Terms and conditions, guidelines for use,
                precautions notified in connection with services, and matters
                notified by RIU.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 11 (Sanctions for Violations of Member’s Obligations).
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                In case the member violates his/her obligations under Article
                10, RIU may sanction members as follows in consideration of the
                importance of the matter and the damages of other members, third
                parties and RIU.
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    <p>Written warning</p>
                    <p>
                      RIU may warn members who violated their obligations under
                      Article 10 in writing, stating the details and the timing
                      of the violation, etc.
                    </p>
                  </li>
                  <li>
                    <p>이용의 제한</p>
                    <p>
                      RIU may restrict estimate requests, biddings, logins, etc.
                      by a certain period of time.
                    </p>
                  </li>
                  <li>
                    <p>Permanent Suspension</p>
                    <p>RIU may permanently suspend the member{`'`}s account.</p>
                  </li>
                </ol>
              </li>
              <li>RIU may permanently suspend the member{`'`}s account.</li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 12 (Information Offering Services for Members)
            </h4>
            <p className="mb-2">
              The Clients and Partners can receive the following services
              through the PACKPOSS. The service in this section is provided free
              of charge through the PACKPOSS.
            </p>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                The Clients may register the estimate request to find Partners
                to deliver packaging they want to purchase.
              </li>
              <li>
                The Partners may register information (portfolio, delivery
                performance in PACKPOSS, production equipment, certificate,
                status information, etc.) required to deliver packaging.
              </li>
              <li>
                The Partners may participate in bidding for registered estimate
                requests to deliver the packaging they want.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 13 (Brokerage of Transaction Contracts between PACKPOSS
              Members)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                According to Article 12 No. 3, in case there is a desired
                Partner among the Partners applied for, the Clients may select
                those of them as the partner.
              </li>
              <li>
                After final consultation with the the partner, the estimate can
                be confirmed and the purchase order can be registered. When
                registering and receiving the purchase order, the PACKPOSS shall
                generate a contract related to the transaction based on the
                estimate request and estimate. Clients and Partners shall be
                deemed to agree and seal the contract by ticking off the check
                box of the contract provided by the PACKPOSS, which shall have
                the same effect as the actual written contract under Article 3
                No.3 of the E-Sign Act and Article 4 No.1 of the Framework Act
                on Electronic Documents and Transactions.
              </li>
              <li>
                After signing a contract between members, the Client deposits
                the purchase amount to the PACKPOSS, and riu keeps it for the
                contract period, and pays the sales amount to the partner as
                prescribed in the contract.
              </li>
              <li>
                The transaction contract between members and individual contract
                between the Clients, the Partners and RIU shall have precedence
                over these Terms. Matters not separately decided by the
                transaction contract between members shall be based on these
                Terms.
              </li>
              <li>
                For various requests, etc. that occur in the course of the work,
                Clients and Partners are obliged to express their intentions
                within a maximum of 7 days, including holidays, except for the
                matters especially prescribed in the transaction contract
                between members. agreement between members. If they fail to
                comply with this, themselves are responsible for all matters
                (refund, cancellation, dispute resolution procedures, etc.).
              </li>
              <li>
                Services in this section are provided at a cost. If the Clients
                and the Partners agreed to trade packaging and made the
                transaction contract between members, RIU pays the purchase
                amount deposited by the Client, multiplying by the ratio set by
                RIU to the purchase amount excluding VAT, as the Partners pays
                RIU a fee under the transaction contract of PACKPOSS. In the
                case of the clue section 3, it shall be followed.
              </li>
              <li>
                RIU does not guarantee the delivery process and products
                delivered by the Partners according to the transaction contract
                between members, and is not responsible for them at all.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 14 (Terms of Service of charged services, etc.)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                In providing charged services, RIU may decide the Terms of
                Service such as the amount of charged services (such as use
                fees, ignoring the name) or using period according to its
                policy. The Terms of Service of charged services shall be
                decided in detailed guidelines for using each charged service or
                individual contracts, or shall be posted on each charged service
                payment screen, etc. to notify the members.
              </li>
              <li>
                Members may pay the using amount to RIU by the method decided by
                RIU (account transfer, credit card, mobile phone, and payment
                method decided by RIU).
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 15 (Changes and Modifications of Services)
            </h4>
            <p>
              RIU may modify or change the contents of the service according to
              operational and technical needs, and the change should be notified
              to the PACKPOSS in such cases. RIU shall not be responsible for
              any members or any third parties for this.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 16 (Provisions and Suspension of Services, etc.)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                RIU shall initiate the service when it has accepted the
                application for use of the members according to the Articles 5
                and 6. However, RIU shall initiate some services from the
                specific point in time if necessary. In such cases, RIU shall
                notify it in advance or later. Even after signing up as a
                member, some services may only be provided to certain members
                according to the RIU’s intentions. RIU shall divide the services
                into a certain range and decide the available time by each
                range. In such cases, the contents shall be announced on the
                PACKPOSS or notified to the member in advance or later.
              </li>
              <li>
                The service is open 24 hours a day and throughout the year in
                principle. However, depending on the nature of the service, the
                provision may be restricted after 6pm on Saturdays, Sundays,
                holidays, and weekdays.
              </li>
              <li>
                In spite of section 2, the services may not be provided for a
                certain period of time in any of the following cases, and RIU is
                not obliged to provide services during that period.
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    In case it is necessary for maintenance, replacement, and
                    regular inspection of equipment including computer or for
                    modification of services.
                  </li>
                  <li>
                    In case it is necessary to respond to electronic
                    infringement accidents, such as hacking, telecommunications
                    accidents, abnormal service use of members, and
                    unpredictable service instability.
                  </li>
                  <li>
                    In case the related statutes prohibit the service provision
                    with a specific point in time or method.
                  </li>
                  <li>
                    In case it is impossible to provide normal services due to
                    natural disasters, national emergency, power failure,
                    failure in service equipment, or congestion of service use.
                  </li>
                  <li>
                    In case of great needs of RIU, such as division, merger,
                    transfer of business, abolition of business, profit
                    aggravation of the relevant service, etc.
                  </li>
                </ol>
              </li>
              <li>
                In the case of each paragraphs of section 3, members shall be
                notified of that fact a week in advance through the initial
                screen of individual service or PACKPOSS, and RIU is not
                responsible for the failure of the members to recognise the
                notification during this period. In case there are unavoidable
                circumstances (such as urgent system inspection, extension,
                replacement, intentions or negligence of system manager, failure
                of disk, system down, PC communications companies that are third
                parties), it can be notified immediately after the circumstances
                have ended.
              </li>
              <li>
                Also, as the contents such as messages, other communication
                messages, etc. kept or transferred to this service by suspension
                of service may not be kept, or deletion, non-transfer and other
                loss of communication data occur, members should keep important
                messages separately and check whether messages are sent after
                the service suspension period. RIU shall not be responsible
                unless there is RIU{`'`}s intentions or faults. The above
                sections shall be applied correspondingly in case services shall
                permanently be suspended due to RIU{`'`}s circumstances.
                However, in this case, the notice period shall be 1 month.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 17 (Information Offering and Publication of Advertisement)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                For the convenience of members, RIU can provide various
                information and advertisements deemed necessary by members
                during the use of services to members through banner
                publication, e-mail, mail, phone message, phone call,
                application notification. However, the members may refuse to
                receive them according to the method provided by RIU if they do
                not want to.
              </li>
              <li>
                Even in the case of the member who refuses to receive under the
                clue in the preceding section, for what members must be noticed
                such as changes in Terms of Service, privacy policy, and other
                important matters that may affect the interests of members, the
                information can be provided by the method in the preceding
                section.
              </li>
              <li>
                various forms of advertising such as banners and links can be
                included in PACKPOSS, that can be linked to pages provided by
                third parties.
              </li>
              <li>
                In case of connecting to a page provided by the third party
                according to section 3, RIU does not guarantee reliability,
                stability, etc., and is not responsible for any damage to the
                members since the page is not the service area of RIU.
              </li>
              <li>
                RIU shall not be responsible for any loss or damage caused by
                members participating in promotional activities with third
                parties, communication or transaction published on the service
                or through the service, unless there is a special provisions in
                the related statues or due to RIU{`'`}s intention or gross
                negligence.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 18 (Termination of Membership)
            </h4>
            <p>
              The member may terminate a service use contract (hereinafter
              {`"`}withdrawal of members{`"`}) through the PACKPOSS. If a member
              files an application for withdrawal from a member, RIU may confirm
              whether it is a member{`'`}s own application, and RIU will take
              measures according to the member{`'`}s application after
              completing the confirmation.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 19 (Termination of Services)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                In cases where the member violates these Terms or of any of the
                following cases, RIU may notify the members to correct within 10
                days, and may terminate the service contract if it is not
                corrected during that period. However, in case a member causes
                damage to RIU in violation of the current law or due to
                intentions or gross negligence, the service contract can be
                terminated without pRIUr notice.
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    In case the data provided by member, such as signing up with
                    unreal name and stealing business registration No., are
                    found to be false.
                  </li>
                  <li>In case of being related to criminal acts.</li>
                  <li>
                    In case of planning or executing the service use for the
                    purpose of hindering the national or social interests.
                  </li>
                  <li>
                    In case of stealing the service account or password of
                    others.
                  </li>
                  <li>
                    In case of damaging or harming the reputation of others.
                  </li>
                  <li>
                    In case of double-registering with a different account by
                    same user.
                  </li>
                  <li>
                    In case of hindering the sound service use, such as harming
                    to services.
                  </li>
                  <li>
                    In case of violating other related statues or conditions of
                    Terms of Service prescribed by RIU.
                  </li>
                </ol>
              </li>
              <li>
                In case the contract is terminated under section 1, all services
                provided to the member shall be suspended, and all accumulated
                matters related to the member{`'`}s activities shall be closed.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 20 (Sanctions on Members)</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                In case of member’s acts in violation of these Terms, the
                service use may arbitrarily be restricted or suspended. In such
                cases, RIU may prohibit access of members, and may arbitrarily
                delete all or part of the contents posted by the members.
              </li>
              <li>
                In case of a dormant member for more than a year, the service
                use may be suspended through the one-week notice period after
                posting an announcement mail or notice.
              </li>
              <li>
                In case the contents of the information provided by the member
                are found to be false or reasonable causes occur for doubt,
                member’s use of the services may be partially or totally
                suspended, and RIU shall not be responsible for any
                disadvantages occurring due to them.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 21 (Transfer Prohibition)</h4>
            <p>
              The member cannot transfer or give his/her rights and status in
              the Terms of Service such as rights to use services and
              transaction contract between members according to these Terms, and
              these are distrainable.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 22 (Exemption)</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                RIU is exempted from obligation in any of the following cases.
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>
                    In case the service cannot be provided due to war, incident,
                    natural disaster, national emergency, technical defects that
                    are difficult to resolve, and other unavoidable reasons.
                  </li>
                  <li>
                    In case of suspension of services, disability of use, and
                    termination of Terms of Service due to reasons attributable
                    to the members.
                  </li>
                  <li>
                    In case the key telecommunications service provider
                    suspended or didn’t provide telecommunication service
                    normally.
                  </li>
                  <li>
                    In case the service is suspended or failed due to
                    unavoidable reasons, such as repair, replacement, regular
                    inspection, construction, etc. of the service equipment
                    notified in advance.
                  </li>
                  <li>
                    In case of entire problems caused by a member{`'`}s computer
                    environment or the problem caused by a network environment
                    without RIU’s intention or gross negligence.
                  </li>
                  <li>
                    In case of a dispute between members or between members and
                    third parties through service without RIU’s intention or
                    gross negligence.
                  </li>
                  <li>
                    In case that there is no RIU’s intention or gross negligence
                    regarding the free services.
                  </li>
                  <li>
                    In case there is no RIU’s intention or gross negligence
                    regarding services provided by other businesses other than
                    RIU.
                  </li>
                  <li>
                    In case the member fails to obtain or lose expected benefits
                    and profits subjectively or of the loss caused by a member
                    {`'`}s choice even though the service is normally provided.
                  </li>
                  <li>
                    In case of loss due to a member{`'`}s computer error or due
                    to inaccurate or missing personal information, e-mail
                    address, etc.
                  </li>
                  <li>
                    In case that services cannot be provided according to
                    related statutes, government policies, etc.
                  </li>
                  <li>
                    In case there is no RIU’s intention or gross negligence for
                    the information, data, reliability of the fact, accuracy,
                    etc. posted or transferred by members or third parties in
                    service or on the PACKPOSS.
                  </li>
                </ol>
              </li>
              <li>
                The mentioned items by members, such as the person in charge of
                affairs task officer posted on the PACKPOSS, are directly
                mentioned by Clients and Partners, and RIU does not guarantee
                verification or veracity and is not responsible for them.
              </li>
              <li>
                Members post information and opinions on the PACKPOSS with their
                own authorities and responsibilities, and RIU is not obliged to
                verify or approve the information or opinions indicated by the
                member or any third party in the course of the service. RIU does
                not guarantee the veracity, accuracy, and reliability of
                information (including, but not limited to the posts such as
                members{`'`} history, introduction, ratings, etc.) and opinions
                by members or other relevant agencies posted in the
                service.Therefore, RIU is not responsible for any kind of loss
                or damage caused by the member{`'`}s trust in the information
                and opinions above.
              </li>
              <li>
                In case of damages to RIU due to member{`'`}s illegal acts or
                acts in violation of this Terms, or receiving a criminal penalty
                or sanctions from investigative and administrative agencies, the
                member shall make up a loss with the member{`'`}s expenses
                (including but not limited to damages, court costs, cost for
                lawyer, etc.), and RIU shall be exempted from obligation.
              </li>
              <li>
                RIU has no obligation to inspect or examine products delivered
                due to the delivery of the Partner after the conclusion of the
                transaction contract between the members under Article 13.
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 23 (Compensation for Damage)
            </h4>
            <p>
              RIU shall not be responsible for any damages to the members in
              connection with the services provided pRIUr to the conclusion of
              the transaction contract between the members, except for damages
              caused by RIU’s intention or gross negligence.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 24 (Trial Jurisdiction)</h4>
            <p>
              In case there is a dispute between RIU and members regarding the
              provision of RIU{`'`}s service, RIU and members should use every
              endeavor necessary to resolve the dispute smoothly. In case there
              is a lawsuit filed for dispute, the court having jurisdiction over
              the address of the persons concerned shall be the competent court.
              However, That the provisions of this Article shall not be applied
              in case the settlement is made by arbitration under the
              transaction contract between members.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 25 (Ownership and license of intellectual property rights
              of service contents)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                {`"`}Content{`"`} means messages, photos, videos, reviews,
                locations, and other data, or any other form of transmitted and
                communicated information. All contents of the PACKAGING POSS
                (hereinafter referred to as {`"`}Service Contents{`"`}) are
                provided to members only for the purpose of using the service
                and are protected by relevant intellectual property rights. The
                member shall not alter, collect, duplicate, transmit, publish
                (including online and offline), distribute, broadcast or
                otherwise use the contents of the service to any third party
                without our written approval.
              </li>
              <li>
                The service contents include member contents, PACKAGING POSS
                contents and third-party contents. {`"`}Member contents{`"`}{" "}
                means information on the profile, such as ratings, reviews,
                photos, event participation, or nicknames, and all other
                contents registered or sent to our server by members related to
                request for estimate using PACKAGING POSS. ‘PACKAGING POSS
                contents’ means any content produced by the PACKAGING POSS such
                as Facebook, Instagram, blog posting, and other online and
                offline products, or any content sent to our server or
                registered on social media (SNS). {`"`}Third-party contents{`"`}{" "}
                means the content provided to the member through the PACKAGING
                POSS service, although not created or derived from the member or
                the PACKAGING POSS.
              </li>
              <li>
                Copyright and other intellectual property rights in the
                {`'`}PACKAGING POSS contents{`'`} belong to RIU co. We may
                arbitrarily delete, modify, edit, reproduce or re-register all
                service contents, if appropriate. Except as otherwise provided
                in this Agreement, we do not grant any license to our members.
                These terms do not affect the rights held by us or any of the
                persons licensed by us in respect of the contents of the
                Services, or any patents, trademarks, copyrights or other
                intellectual property rights associated thereto. These terms and
                conditions do not grant any related license or other rights to
                the trademark of PACKAGING POSS or any other third-party.
              </li>
              <li>
                Copyright and intellectual property rights for posts such as
                ratings, reviews, comments, and photos written and registered by
                the member (hereinafter referred to as ‘Member contents’) belong
                to the member, and if the member contents infringe on the
                copyright of others, the member himself/herself shall be
                responsible. The member grants us exclusive access to the member
                contents. As a result, we have free to use the member contents
                to PACKAGING POSS mobile and PC websites, Facebook pages,
                Instagram, blogs, advertisements, search exposure, promotions,
                promotions, and other media, and we can modify, duplicate and
                edit parts of them as much as necessary. In addition, the member
                agrees that we have the authority to delete, modify or
                re-register the member contents at any time, depending on the
                community guidelines or other appropriate reasons within the
                company. However, the member may request that the member
                contents be not used as marketing, promotion, promotion, or
                other materials, and may modify or delete the contents of the
                member using the functions in the PACKAGING POSS service.
              </li>
              <li>
                RIU prohibits publishing the following content. In case of
                violation of them, RIU may delete, move, or reject to register
                the content without notice.
                <ol className="ml-6 mt-2 flex list-outside list-[upper-roman] flex-col gap-2 marker:text-gray-400">
                  <li>In case it does not meet the purpose of service use.</li>
                  <li>
                    In case of repetition as there is a corresponding or similar
                    contents.
                  </li>
                  <li>
                    In case of direct input for the contents of the main email
                    address, main phone No., mobile No., main address, URL, etc.
                  </li>
                  <li>
                    In case of proposing a form other than payment provided by
                    RIU.
                  </li>
                  <li>
                    In case of inducing, recommending, or proposing a direct
                    transaction without using this service
                  </li>
                  <li>
                    In case of the contents deemed to be in violation of these
                    Terms of Service or commercial, illegal, obscene, or vulgar.
                  </li>
                  <li>
                    In the case of the contents injuring the honor with
                    defamation or slandering other members or third parties.
                  </li>
                  <li>
                    In the case of violation of public order and fine custom.
                  </li>
                  <li>
                    In the case of the contents deemed to be related to the
                    criminal act.
                  </li>
                  <li>
                    In the case of the contents violating the portrait right,
                    copyright, etc. of third parties.
                  </li>
                  <li>
                    In case of information that does not conform to the nature
                    of the service.
                  </li>
                  <li>In cases of violation of other related statutes.</li>
                </ol>
              </li>
              <li>
                If a third-party (including a non-member) infringes copyright
                and intellectual property rights on the member contents, the
                member delegate exclusively to us the right to exercise the
                copyright and intellectual property rights and take appropriate
                legal action on his behalf. However, the member may directly
                exercise copyright and intellectual property rights. But without
                such request, he/she shall be deemed to have agreed to the power
                of attorney in this section.
              </li>
            </ol>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="my-4 text-3xl">Chapter 2 Payment Protection System</h3>
          <p className="mb-4">
            The payment protection system means a service where the Client
            deposits the purchase amount to RIU (hereinafter “payment”) before
            receiving the packaging from the Partner, and RIU pays the Partner
            according to the payment approval by Client, and a service that can
            be provided after signing a transaction contract between PACKPOSS
            members under Article 13. RIU shall receive all purchase amounts for
            all transactions and deposit them until the time of mutual
            confirmation of the results of the members{`'`} transactions for
            confidence in the service in principle.Through these payment
            protection systems, to enhance confidence in mutual transactions and
            prevent dispute over payment from occurring, the Partner cannot be
            paid so-called deposits (down payment, prepayment, etc.) with
            product production (Or close to it).
          </p>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 26 (Disclosure of Payment Status)
            </h4>
            <p>
              Members who have made a transaction contract between members can
              check the status of payment, settlement etc. through the PACKPOSS.
              If the status of the payment changes, RIU must apply the changed
              status within 7 days.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">Article 27 (Check Payment Details)</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                RIU shall allow the members to check the payment details of the
                members if requested by the members, and shall notify the
                payment details by email, etc. within 15 days from the date of
                receipt of the request. Members may request payment details
                confirmation to the following address, email, and phone No.
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    Address: Kolon Digital Tower I (Room No. 712), 30,
                    Digital-ro 32-gil, Guro-gu, Seoul, Republic of Korea
                  </li>
                  <li>Email: PACKPOSS-help@riupack.com</li>
                  <li>Phone No.: +82 70-8672-6677</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 28 (Interest Earnings and Charges)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                Members agree not to receive the interests or separate earnings
                for the deposited purchase amount in the use of the payment
                protection system. RIU can generate interests or separate
                earnings for deposited purchase amounts.
              </li>
              <li>
                In case the charges are incurred for the deposit and withdrawal
                of a deposit account (such as overseas remittance, currency
                exchange, etc.) through the payment protection system, RIU may
                charge members separately for this.
              </li>
              <li>
                Article 14 of this Article shall apply correspondingly to using
                the amount of paid services (regardless of the name, such as
                using amount).
              </li>
            </ol>
          </div>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 29 (Payment of Contract Performance)
            </h4>
            <p>
              RIU shall pay or refund the deposited purchase amount according to
              the transaction contract between the members. The work related to
              payment or refund shall be carried out within weekday business
              hours in principle. Article 14 of this Article shall apply
              correspondingly to using the amount of paid services (regardless
              of the name, such as using amount).
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="my-4 text-3xl">Chapter 3 Safe Arbitration Services</h3>
          <p className="mb-4">
            The safe arbitration service is a dispute resolution service
            provided by RIU to help members resolve disputes smoothly and
            quickly in case there is a dispute after making a service contract
            between the members of the PACKPOSS under Article 13.
          </p>
          <div className="mb-4">
            <h4 className="mb-2 text-lg">
              Article 30 (Safe Arbitration Services)
            </h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>
                The safe arbitration service is carried out in three steps as
                follows.
                <ul className="ml-6 mt-2 flex list-outside list-disc flex-col gap-2 marker:text-gray-400">
                  <li>
                    <p>Step 1: Both Parties Council</p>
                    <p>
                      Both parties council is the step to find middle ground
                      through conversation between Clients and Partners when
                      there is a dispute during the transaction.
                    </p>
                  </li>
                  <li>
                    <p>Step 2: RIU’s Support Meeting</p>
                    <p>
                      In case of failure to find middle ground during the step
                      of both parties council, it is a step receiving neutral
                      help through RIU.
                    </p>
                  </li>
                </ul>
                <li>
                  <p>Step 3: Institutional Arbitration</p>
                  <p>
                    In case of failure to find middle ground in the previous two
                    steps, the dispute will be settled by the arbitration
                    decision of the Korean Commercial Arbitration Board (a
                    permanent legal institution established under the
                    Arbitration Act). RIU shall review the documents required
                    for the request for arbitration and shall provide full
                    support for the arbitration costs. However, both parties are
                    responsible for the cost exceeding the limit of support.
                  </p>
                </li>
              </li>
              <li>
                In case the Clients and Partners improperly abuse or excessively
                demand RIU{`'`}s dispute resolution services, RIU may refuse,
                cancel or terminate a service contract with members or between
                RIU’s members, and may claim damages in the event of damage to
                RIU.
              </li>
              <li>
                For each member who has applied for safe arbitration service,
                RIU can indicate the fact of the dispute in a reasonable way
                that other members can recognize in PACKPOSS.
              </li>
            </ol>
          </div>

          <div className="mb-4">
            <h4 className="mb-2 text-lg">Supplementary Provision</h4>
            <ol className="ml-4 flex list-outside list-decimal flex-col gap-3 marker:text-gray-400">
              <li>These Terms shall be implemented from April 19, 2022.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseContainer;
