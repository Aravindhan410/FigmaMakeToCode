import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import AddressBar, { generateBreadcrumbs } from './components/AddressBar';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import EditStudent from './components/EditStudent';
import PhotoUpdation from './components/PhotoUpdation';
import StudentMarkAchievement from './components/StudentMarkAchievement';
import StockEntryPage from './components/StockEntry';
import PurchaseEntryPage from './components/PurchaseEntry';
import SendLetter from './components/SendLetter';
import ReceiveLetter from './components/ReceiveLetter';
import LetterReportPage from './components/LetterReport';
import StockReportMain from './components/StockReportMain';
import PurchaseReportPage from './components/PurchaseReport';
import Assets from './components/Assets';
import IDCardPage from './components/IDCard';
import CallanHistory from './components/CallanHistory';
import StudentFeePage from './components/StudentFee';
import FeeReceiptPage from './components/FeeReceipt';
import IncomeExpensePage from './components/IncomeExpense';
import Settlement from './components/Settlement';
import VendorDetailPage from './components/VendorDetail';
import Transaction from './components/Transaction';
import IncomeExpenditureReport from './components/IncomeExpenditureReport';
import FeeNotPayPage from './components/FeeNotPay';
import ConsolidatedReport from './components/ConsolidatedReport';
import BalanceReport from './components/BalanceReport';
import FeeCollectionDateWise from './components/FeeCollectionDateWise';
import FeeCollectionCanceled from './components/FeeCollectionCanceled';
import CashBook from './components/CashBook';
import NarrationReport from './components/NarrationReport';
import FeeIncomeReportDailyCollection from './components/FeeIncomeReportDailyCollection';
import FeeIncomeReportDailyExpense from './components/FeeIncomeReportDailyExpense';
import FeeIncomeReportMonthWiseIncome from './components/FeeIncomeReportMonthWiseIncome';
import FeeIncomeReportYearWiseIncome from './components/FeeIncomeReportYearWiseIncome';
import BudgetReport from './components/BudgetReport';
import VendorReport from './components/VendorReport';
import AssetReport from './components/AssetReport';
import VehicleDetails from './components/VehicleDetails';
import FeeStructure from './components/FeeStructure';
import VehicleReport from './components/VehicleReport';
import BusIDCard from './components/BusIDCard';
import VehicleExpense from './components/VehicleExpense';
import KMPLReport from './components/KMPLReport';
import StudentBus from './components/StudentBus';
import EditHosteller from './components/EditHosteller';
import RoomDetails from './components/RoomDetails';
import RoomAdmission from './components/RoomAdmission';
import ProvisionList from './components/ProvisionList';
import PermissionLeave from './components/PermissionLeave';
import Purchase from './components/Purchase';
import Balance from './components/Balance';
import Provision from './components/Provision';
import HostelExpense from './components/HostelExpense';
import MessBill from './components/MessBill';
import HostellerReport from './components/HostellerReport';
import PersonalLedger from './components/PersonalLedger';
import StudentVacateList from './components/StudentVacateList';
import ElectricalAndRent from './components/ElectricalAndRent';
import DueRefundList from './components/DueRefundList';
import StudentAddress from './components/StudentAddress';
import UserDetails from './components/UserDetails';
import LogDetails from './components/LogDetails';
import CalendarDetail from './components/CalendarDetail';
import BranchDetail from './components/BranchDetail';
import TheorySubject from './components/TheorySubject';
import PracticalSubject from './components/PracticalSubject';
import StaffDetails from './components/StaffDetails';
import FeeMaster from './components/FeeMaster';
import StudentEntry from './components/StudentEntry';
import Student_Entry from './components/Student_Entry';
import StudentEdit from './components/StudentEdit';
import EnquiryReport from './components/EnquiryReport';
import QuatoAllocation from './components/QuatoAllocation';
import ApplicationIssue from './components/ApplicationIssue';
import AdmittingStudents from './components/AdmittingStudents';
import PhotoPath from './components/PhotoPath';
import AdmissionStats from './components/AdmissionStats';
import StudentProfile from './components/StudentProfile';
import GeneralForms from './components/GeneralForms';
import FormE from './components/FormE';
import Ranking from './components/Ranking';
import AppIssueCourseWise from './components/AppIssueCourseWise';
import AppIssueConsolidate from './components/AppIssueConsolidate';
import AdmittedList from './components/AdmittedList';
import StudentMarkDetails from './components/StudentMarkDetails';
import StudentReport from './components/StudentReport';
import StudentAddressDetails from './components/StudentAddressDetails';
import EditTC from './components/EditTC';
import TransferTC from './components/TransferTC';
import FeeEstimation from './components/FeeEstimation';
import CourseCompletion from './components/CourseCompletion';
import ConductCertificate from './components/ConductCertificate';
import BonafideCertificate from './components/BonafideCertificate';
import DailyAttendance from './components/DailyAttendance';
import SpellAttendance from './components/SpellAttendance';
import SubjectAttendance from './components/SubjectAttendance';
import AttendanceHistory from './components/AttendanceHistory';
import Configuration from './components/Configuration';
import LetterFormat from './components/LetterFormat';
import AttendanceReport from './components/AttendanceReport';
import SpellReport from './components/SpellReport';
import CriteriaAttendance from './components/CriteriaAttendance';
import DataRangeExport from './components/DataRangeExport';
import Assignment from './components/Assignment';
import UnitTest from './components/UnitTest';
import Practicals from './components/Practicals';
import ExternalMark from './components/ExternalMark';
import MarkConfig from './components/MarkConfig';
import PracticalMarkEntry from './components/PracticalMarkEntry';
import PracticalMarkCM from './components/PracticalMarkCM';
import PracticalMarkCMAvg from './components/PracticalMarkCMAvg';
import TheoryMarkEntry from './components/TheoryMarkEntry';
import TheoryMarkCM from './components/TheoryMarkCM';
import TheoryMarkCMAvg from './components/TheoryMarkCMAvg';
import AssignmentReport from './components/AssignmentReport';
import TestReport from './components/TestReport';
import TestStatistics from './components/TestStatistics';
import IMGeneration from './components/IMGeneration';
import SubjectPerformance from './components/SubjectPerformance';
import SubjectAnalysis from './components/SubjectAnalysis';
import DepartmentResult from './components/DepartmentResult';
import ProgressReport from './components/ProgressReport';
import StudentActivity from './components/StudentActivity';
import ExamSettings from './components/ExamSettings';
import CourseDetails from './components/CourseDetails';
import HallDetails from './components/HallDetails';
import TimeTable from './components/TimeTable';
import EditNominal from './components/EditNominal';
import ExamFee from './components/ExamFee';
import ExamProcess from './components/ExamProcess';
import ExamForms from './components/ExamForms';
import ExamGeneration from './components/ExamGeneration';
import HallChart from './components/HallChart';
import SeatAllotment from './components/SeatAllotment';
import DaywarStatement from './components/DaywarStatement';
import DigitalNumbering from './components/DigitalNumbering';
import TheoryNameList from './components/TheoryNameList';
import QPDistribution from './components/QPDistribution';
import EditExamProcess from './components/EditExamProcess';
import DuplicateFinder from './components/DuplicateFinder';
import AbsenteesEntry from './components/AbsenteesEntry';
import Ex2Present from './components/Ex2Present';
import Ex2Absent from './components/Ex2Absent';
import FormEx1 from './components/FormEx1';
import FormEx6 from './components/FormEx6';
import QPCReport from './components/QPCReport';
import ExportAbsentees from './components/ExportAbsentees';
import ConsolidatedAbsentees from './components/ConsolidatedAbsentees';
import ExportConAttendance from './components/ExportConAttendance';
import QPRequirement from './components/QPRequirement';
import NormalStrengthList from './components/NormalStrengthList';
import SimpleStrengthList from './components/SimpleStrengthList';
import DetailStrengthList from './components/DetailStrengthList';
import CollegeStrength from './components/CollegeStrength';
import CheckList from './components/CheckList';
import NominalRoll from './components/NominalRoll';
import SingleSMS from './components/SingleSMS';
import GroupSMS from './components/GroupSMS';
import Templates from './components/Templates';
import TestSMS from './components/TestSMS';
import ContactBook from './components/ContactBook';
import SentBox from './components/SentBox';
import SMSReport from './components/SMSReport';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import AvailableBook from './components/AvailableBook';
import BookOut from './components/BookOut';
import AllBookList from './components/AllBookList';
import EditBorrower from './components/EditBorrower';
import BorrowerHistory from './components/BorrowerHistory';
import CurrentBorrower from './components/CurrentBorrower';
import FineDetails from './components/FineDetails';
import BookIssue from './components/BookIssue';
import BookReturn from './components/BookReturn';
import BookRenewal from './components/BookRenewal';
import StudentEntry from './components/StudentEntry';
import BarcodeBookNo from './components/BarcodeBookNo';
import BarcodeBorrower from './components/BarcodeBorrower';
import StockVerification from './components/StockVerification';
import NoDueCertificate from './components/NoDueCertificate';
import DueDateExit from './components/DueDateExit';
import CurrentStock from './components/CurrentStock';
import MissingBooks from './components/MissingBooks';
import BookTransactions from './components/BookTransactions';
import BorrowersReport from './components/BorrowersReport';
import BookHistoryReport from './components/BookHistoryReport';
import BookAvailabilityReport from './components/BookAvailabilityReport';
import BookPositionReport from './components/BookPositionReport';
import FineReport from './components/FineReport';
import LibraryStrengthReport from './components/LibraryStrengthReport';
import ThemeSettings from './components/ThemeSettings';
import RecentActivityShow from './components/RecentActivityShow';
import WindowCascade from './components/WindowCascade';
import WindowTileVertical from './components/WindowTileVertical';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import FileOverview from './components/FileOverview';
import MasterDataOverview from './components/MasterDataOverview';
import AdmissionOverview from './components/AdmissionOverview';
import AcademicOverview from './components/AcademicOverview';
import ExaminationOverview from './components/ExaminationOverview';
import AdministrationOverview from './components/AdministrationOverview';
import SMSOverview from './components/SMSOverview';
import LibraryOverview from './components/LibraryOverview';
import WindowOverview from './components/WindowOverview';
import AcademicAttendanceOverview from './components/AcademicAttendanceOverview';
import AcademicAssessmentOverview from './components/AcademicAssessmentOverview';
import AdmissionEnquiryOverview from './components/AdmissionEnquiryOverview';
import AdmissionAdmissionProcessOverview from './components/AdmissionAdmissionProcessOverview';
import AdmissionReportsOverview from './components/AdmissionReportsOverview';
import AdmissionCertificatesOverview from './components/AdmissionCertificatesOverview';
import AcademicAssessmentReportOverview from './components/AcademicAssessmentReportOverview';
import ExaminationDataSubmissionOverview from './components/ExaminationDataSubmissionOverview';
import ExaminationExamProcessOverview from './components/ExaminationExamProcessOverview';
import ExaminationExamFormsOverview from './components/ExaminationExamFormsOverview';
import MasterDataIntuitionOverview from './components/MasterDataIntuitionOverview';
import AcademicAttendanceAttendanceReportOverview from './components/AcademicAttendanceAttendanceReportOverview';
import AcademicAssessmentPracticalMarkOverview from './components/AcademicAssessmentPracticalMarkOverview';
import AcademicAssessmentTheoryMarkOverview from './components/AcademicAssessmentTheoryMarkOverview';
import AcademicAssessmentReportExternalMarkReportOverview from './components/AcademicAssessmentReportExternalMarkReportOverview';
import ExaminationDataSubmissionStrengthListOverview from './components/ExaminationDataSubmissionStrengthListOverview';
import AdministrationGeneralDataOverview from './components/AdministrationGeneralDataOverview';
import AdministrationGeneralDataLetterOverview from './components/AdministrationGeneralDataLetterOverview';
import AdministrationOfficeOverview from './components/AdministrationOfficeOverview';
import AdministrationOfficeReportOverview from './components/AdministrationOfficeReportOverview';
import AdministrationOfficeReportFeeCollectionReportOverview from './components/AdministrationOfficeReportFeeCollectionReportOverview';
import AdministrationOfficeReportFeeIncomeReportOverview from './components/AdministrationOfficeReportFeeIncomeReportOverview';
import AdministrationTransportOverview from './components/AdministrationTransportOverview';
import AdministrationHostelOverview from './components/AdministrationHostelOverview';
import AdministrationHostelReportsOverview from './components/AdministrationHostelReportsOverview';
import LibraryLibraryOverview from './components/LibraryLibraryOverview';
import LibraryLibraryBooksOverview from './components/LibraryLibraryBooksOverview';
import LibraryLibraryBarrowersOverview from './components/LibraryLibraryBarrowersOverview';
import LibraryLibraryBarcodeGenerationOverview from './components/LibraryLibraryBarcodeGenerationOverview';
import LibraryReportsOverview from './components/LibraryReportsOverview';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [currentPath, setCurrentPath] = useState('Dashboard');

  // Check authentication status on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated');
    const user = sessionStorage.getItem('currentUser');
    
    if (authStatus === 'true' && user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);

  // Handle successful login
  const handleLoginSuccess = (username: string) => {
    setIsAuthenticated(true);
    setCurrentUser(username);
    setCurrentPath('Dashboard');
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser('');
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('rememberedUser');
    setCurrentPath('Dashboard');
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  // Map of menu paths to components
  const getContentComponent = () => {
    switch (currentPath) {
      case 'Dashboard':
        return <Dashboard onNavigate={setCurrentPath} />;
      
      // Main Menu Section Overviews
      case 'File':
        return <FileOverview onNavigate={setCurrentPath} />;
      
      case 'Master Data':
        return <MasterDataOverview onNavigate={setCurrentPath} />;
      
      case 'Admission':
        return <AdmissionOverview onNavigate={setCurrentPath} />;
      
      case 'Academic':
        return <AcademicOverview onNavigate={setCurrentPath} />;
      
      case 'Examination':
        return <ExaminationOverview onNavigate={setCurrentPath} />;
      
      case 'Administration':
        return <AdministrationOverview onNavigate={setCurrentPath} />;
      
      case 'SMS':
        return <SMSOverview onNavigate={setCurrentPath} />;
      
      case 'Library':
        return <LibraryOverview onNavigate={setCurrentPath} />;
      
      case 'Window':
        return <WindowOverview onNavigate={setCurrentPath} />;
      
      // File Menu
      case 'File -> User Details':
        return <UserDetails />;
      
      case 'File -> Log Details':
        return <LogDetails />;
      
      // Academic Section Overviews
      case 'Academic -> Attendance -> Attendance Report':
        return <AcademicAttendanceAttendanceReportOverview onNavigate={setCurrentPath} />;
      
      case 'Academic -> Assessment -> Practical Mark':
        return <AcademicAssessmentPracticalMarkOverview onNavigate={setCurrentPath} />;
      
      case 'Academic -> Assessment -> Theory Mark':
        return <AcademicAssessmentTheoryMarkOverview onNavigate={setCurrentPath} />;
      
      case 'Academic -> Assessment Report -> External Mark Report':
        return <AcademicAssessmentReportExternalMarkReportOverview onNavigate={setCurrentPath} />;
      
      // Examination Section Overviews
      case 'Examination -> Data submission -> Strength List':
        return <ExaminationDataSubmissionStrengthListOverview onNavigate={setCurrentPath} />;
      
      // Administration Section Overviews
      case 'Administration -> General Data':
        return <AdministrationGeneralDataOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> General Data -> Letter':
        return <AdministrationGeneralDataLetterOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Office':
        return <AdministrationOfficeOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Office Report':
        return <AdministrationOfficeReportOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Office Report -> Fee Collection Report':
        return <AdministrationOfficeReportFeeCollectionReportOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Office Report -> Fee Income Report':
        return <AdministrationOfficeReportFeeIncomeReportOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Transport':
        return <AdministrationTransportOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Hostel':
        return <AdministrationHostelOverview onNavigate={setCurrentPath} />;
      
      case 'Administration -> Hostel Reports':
        return <AdministrationHostelReportsOverview onNavigate={setCurrentPath} />;
      
      // Library Section Overviews
      case 'Library -> Library':
        return <LibraryLibraryOverview onNavigate={setCurrentPath} />;
      
      case 'Library -> Library -> Books':
        return <LibraryLibraryBooksOverview onNavigate={setCurrentPath} />;
      
      case 'Library -> Library -> Barrowers':
        return <LibraryLibraryBarrowersOverview onNavigate={setCurrentPath} />;
      
      case 'Library -> Library -> Barcode Generation':
        return <LibraryLibraryBarcodeGenerationOverview onNavigate={setCurrentPath} />;
      
      case 'Library -> Library Reports':
        return <LibraryReportsOverview onNavigate={setCurrentPath} />;
      
      // Master Data Section Overviews
      case 'Master Data -> Intuition':
        return <MasterDataIntuitionOverview onNavigate={setCurrentPath} />;
      
      // Master Data -> Intuition Pages
      case 'Master Data -> Intuition -> Calendar Detail':
        return <CalendarDetail />;
      
      case 'Master Data -> Intuition -> Branch Detail':
        return <BranchDetail />;
      
      case 'Master Data -> Intuition -> Theory Subject':
        return <TheorySubject />;
      
      case 'Master Data -> Intuition -> Practical Subject':
        return <PracticalSubject />;
      
      case 'Master Data -> Staff Details':
        return <StaffDetails />;
      
      case 'Master Data -> Fee Master':
        return <FeeMaster />;
      
      case 'Admission -> Enquiry -> Student Entry':
        return <StudentEntry />;
      
      case 'Admission -> Enquiry -> Student_Entry':
        return <Student_Entry />;
      
      case 'Admission -> Enquiry -> Student Edit':
        return <StudentEdit />;
      
      case 'Admission -> Enquiry -> Enquiry Report':
        return <EnquiryReport />;
      
      case 'Admission -> Admission -> Quato Allocation':
        return <QuatoAllocation />;
      
      case 'Admission -> Admission -> Application Issue':
        return <ApplicationIssue />;
      
      case 'Admission -> Admission -> Admitting Student':
        return <AdmittingStudents />;
      
      case 'Admission -> Admission -> Photo Path':
        return <PhotoPath />;
      
      case 'Admission -> Admission -> Admission Stats':
        return <AdmissionStats />;
      
      case 'Admission -> Admission Reports -> Student Profile':
        return <StudentProfile />;
      
      case 'Admission -> Admission Reports -> General Forms':
        return <GeneralForms />;
      
      case 'Admission -> Admission Reports -> Form E':
        return <FormE />;
      
      case 'Admission -> Admission Reports -> Ranking':
        return <Ranking />;
      
      case 'Admission -> Admission Reports -> App Issue Course Wise':
        return <AppIssueCourseWise />;
      
      case 'Admission -> Admission Reports -> App Issue Consolidate':
        return <AppIssueConsolidate />;
      
      case 'Admission -> Admission Reports -> Admitted List':
        return <AdmittedList />;
      
      case 'Admission -> Admission Reports -> Student Mark Details':
        return <StudentMarkDetails />;
      
      case 'Admission -> Admission Reports -> Student Report':
        return <StudentReport />;
      
      case 'Admission -> Admission Reports -> Student Address Details':
        return <StudentAddressDetails />;
      
      case 'Admission -> Certificates -> Edit TC':
        return <EditTC />;
      
      case 'Admission -> Certificates -> Transfer Certificate':
        return <TransferTC />;
      
      case 'Admission -> Certificates -> Fee Estimation':
        return <FeeEstimation />;
      
      case 'Admission -> Certificates -> Course Completion':
        return <CourseCompletion />;
      
      case 'Admission -> Certificates -> Contact Certificate':
        return <ConductCertificate />;
      
      case 'Admission -> Certificates -> Bonafide Certificate':
        return <BonafideCertificate />;
      
      // Academic Section Overviews
      case 'Academic -> Attendance':
        return <AcademicAttendanceOverview onNavigate={setCurrentPath} />;
      
      case 'Academic -> Assessment':
        return <AcademicAssessmentOverview onNavigate={setCurrentPath} />;
      
      case 'Academic -> Assessment Report':
        return <AcademicAssessmentReportOverview onNavigate={setCurrentPath} />;
      
      // Admission Section Overviews
      case 'Admission -> Enquiry':
        return <AdmissionEnquiryOverview onNavigate={setCurrentPath} />;
      
      case 'Admission -> Admission':
        return <AdmissionAdmissionProcessOverview onNavigate={setCurrentPath} />;
      
      case 'Admission -> Admission Reports':
        return <AdmissionReportsOverview onNavigate={setCurrentPath} />;
      
      case 'Admission -> Certificates':
        return <AdmissionCertificatesOverview onNavigate={setCurrentPath} />;
      
      // Academic -> Attendance Pages
      case 'Academic -> Attendance -> Daily Attendance':
        return <DailyAttendance />;
      
      case 'Academic -> Attendance -> Spell Attendance':
        return <SpellAttendance />;
      
      case 'Academic -> Attendance -> Subject Attendance':
        return <SubjectAttendance />;
      
      case 'Academic -> Attendance -> Attendance History':
        return <AttendanceHistory />;
      
      case 'Academic -> Attendance -> Configuration':
        return <Configuration />;
      
      case 'Academic -> Attendance -> Attendance Report -> Letter Format':
        return <LetterFormat />;
      
      case 'Academic -> Attendance -> Attendance Report -> Attendance Report':
        return <AttendanceReport />;
      
      case 'Academic -> Attendance -> Spell Report':
        return <SpellReport />;
      
      case 'Academic -> Attendance -> Criteria Attendance':
        return <CriteriaAttendance />;
      
      case 'Academic -> Attendance -> Data Range Export':
        return <DataRangeExport />;
      
      case 'Academic -> Assessment -> Assignment':
        return <Assignment />;
      
      case 'Academic -> Assessment -> Unit Test':
        return <UnitTest />;
      
      case 'Academic -> Assessment -> Practical\'s':
        return <Practicals />;
      
      case 'Academic -> Assessment -> External Mark':
        return <ExternalMark />;
      
      case 'Academic -> Assessment -> Mark Config':
        return <MarkConfig />;
      
      case 'Academic -> Assessment -> Practical Mark -> Practical Mark Entry':
        return <PracticalMarkEntry />;
      
      case 'Academic -> Assessment -> Practical Mark -> Practical Mark CM':
        return <PracticalMarkCM />;
      
      case 'Academic -> Assessment -> Practical Mark -> Practical Mark CM Avg':
        return <PracticalMarkCMAvg />;
      
      case 'Academic -> Assessment -> Theory Mark -> Theory Mark Entry':
        return <TheoryMarkEntry />;
      
      case 'Academic -> Assessment -> Theory Mark -> Theory Mark CM':
        return <TheoryMarkCM />;
      
      case 'Academic -> Assessment -> Theory Mark -> Theory Mark CM Avg':
        return <TheoryMarkCMAvg />;
      
      case 'Academic -> Assessment Report -> Assignment Report':
        return <AssignmentReport />;
      
      case 'Academic -> Assessment Report -> Test Report':
        return <TestReport />;
      
      case 'Academic -> Assessment Report -> Test Statistics':
        return <TestStatistics />;
      
      case 'Academic -> Assessment Report -> IM Generation':
        return <IMGeneration />;
      
      case 'Academic -> Assessment Report -> External Mark Report -> Subject Performance':
        return <SubjectPerformance />;
      
      case 'Academic -> Assessment Report -> External Mark Report -> Subject Analysis':
        return <SubjectAnalysis />;
      
      case 'Academic -> Assessment Report -> External Mark Report -> Department Result':
        return <DepartmentResult />;
      
      case 'Academic -> Assessment Report -> Progress Report':
        return <ProgressReport />;
      
      case 'Academic -> Assessment Report -> Student Activity':
        return <StudentActivity />;
      
      // Examination Section Overviews
      case 'Examination -> Data submission':
        return <ExaminationDataSubmissionOverview onNavigate={setCurrentPath} />;
      
      case 'Examination -> Exam Process':
        return <ExaminationExamProcessOverview onNavigate={setCurrentPath} />;
      
      case 'Examination -> Exam Forms':
        return <ExaminationExamFormsOverview onNavigate={setCurrentPath} />;
      
      // Examination -> Data submission Pages
      case 'Examination -> Data submission -> Exam Settings':
        return <ExamSettings />;
      
      case 'Examination -> Data submission -> Course Details':
        return <CourseDetails />;
      
      case 'Examination -> Data submission -> Hall Details':
        return <HallDetails />;
      
      case 'Examination -> Data submission -> Time Table':
        return <TimeTable />;
      
      case 'Examination -> Data submission -> Edit Nominal':
        return <EditNominal />;
      
      case 'Examination -> Data submission -> Exam Fee':
        return <ExamFee />;
      
      case 'Examination -> Data submission -> Nominal Roll':
        return <NominalRoll />;
      
      case 'Examination -> Data submission -> QP Requirement':
        return <QPRequirement />;
      
      case 'Examination -> Data submission -> Strength List -> Normal Strength List':
        return <NormalStrengthList />;
      
      case 'Examination -> Data submission -> Strength List -> Simple Strength List':
        return <SimpleStrengthList />;
      
      case 'Examination -> Data submission -> Strength List -> Detail Strength List':
        return <DetailStrengthList />;
      
      case 'Examination -> Data submission -> College Strength':
        return <CollegeStrength />;
      
      case 'Examination -> Data submission -> Check List':
        return <CheckList />;
      
      case 'Examination -> Exam Process':
        return <ExamProcess />;
      
      case 'Examination -> Exam Process -> Exam Generation':
        return <ExamGeneration />;
      
      case 'Examination -> Exam Process -> Hall Chart':
        return <HallChart />;
      
      case 'Examination -> Exam Process -> Seat Allotment':
        return <SeatAllotment />;
      
      case 'Examination -> Exam Process -> Daywar Statement':
        return <DaywarStatement />;
      
      case 'Examination -> Exam Process -> Digital Numbering':
        return <DigitalNumbering />;
      
      case 'Examination -> Exam Process -> Theory NameList':
        return <TheoryNameList />;
      
      case 'Examination -> Exam Process -> QP Distribution':
        return <QPDistribution />;
      
      case 'Examination -> Exam Process -> Edit ExamProcess':
        return <EditExamProcess />;
      
      case 'Examination -> Exam Process -> Duplicate Finder':
        return <DuplicateFinder />;
      
      case 'Examination -> Exam Forms':
        return <ExamForms />;
      
      case 'Examination -> Exam Forms -> Absentees Entry':
        return <AbsenteesEntry />;
      
      case 'Examination -> Exam Forms -> Ex2 Present':
        return <Ex2Present />;
      
      case 'Examination -> Exam Forms -> Ex2 Absent':
        return <Ex2Absent />;
      
      case 'Examination -> Exam Forms -> Form Ex1':
        return <FormEx1 />;
      
      case 'Examination -> Exam Forms -> Form Ex6':
        return <FormEx6 />;
      
      case 'Examination -> Exam Forms -> QPC Report':
        return <QPCReport />;
      
      case 'Examination -> Exam Forms -> Export Absentees':
        return <ExportAbsentees />;
      
      case 'Examination -> Exam Forms -> Consolidated Absentees':
        return <ConsolidatedAbsentees />;
      
      case 'Examination -> Exam Forms -> Export ConAttendance':
        return <ExportConAttendance />;
      
      case 'Master Data -> Student Register':
        return <StudentRegistrationForm />;
      
      case 'Master Data -> Edit Student':
        return <EditStudent />;
      
      case 'Master Data -> Photo Updation':
        return <PhotoUpdation />;
      
      case 'Master Data -> Student Mark & Achievement':
        return <StudentMarkAchievement />;
      
      case 'Administration -> General Data -> Stock Entry':
        return <StockEntryPage />;
      
      case 'Administration -> General Data -> Purchase Entry':
        return <PurchaseEntryPage />;
      
      case 'Administration -> General Data -> Purchase Report':
        return <PurchaseReportPage />;
      
      case 'Administration -> General Data -> Assets':
        return <Assets />;
      
      case 'Administration -> General Data -> ID Card':
        return <IDCardPage />;
      
      case 'Administration -> General Data -> Letter -> Send Letter':
        return <SendLetter />;
      
      case 'Administration -> General Data -> Letter -> Receive Letter':
        return <ReceiveLetter />;
      
      case 'Administration -> General Data -> Letter -> Letter Report':
        return <LetterReportPage />;
      
      case 'Administration -> General Data -> Stock Report':
        return <StockReportMain />;
      
      case 'Administration -> Office -> Callan History':
        return <CallanHistory />;
      
      case 'Administration -> Office -> Student Fee':
        return <StudentFeePage />;
      
      case 'Administration -> Office -> Fee Receipt':
        return <FeeReceiptPage />;
      
      case 'Administration -> Office -> Income/Expense':
        return <IncomeExpensePage />;
      
      case 'Administration -> Office -> Settlement':
        return <Settlement />;
      
      case 'Administration -> Office -> Vendor Detail':
        return <VendorDetailPage />;
      
      case 'Administration -> Office -> Transaction':
        return <Transaction />;
      
      case 'Administration -> Office Report -> Income/Expenditure':
        return <IncomeExpenditureReport />;
      
      case 'Administration -> Office Report -> Fee not pay':
        return <FeeNotPayPage />;
      
      case 'Administration -> Office Report -> Fee Collection Report -> Consolidated Report':
        return <ConsolidatedReport />;
      
      case 'Administration -> Office Report -> Fee Collection Report -> Balance Report':
        return <BalanceReport />;
      
      case 'Administration -> Office Report -> Fee Collection Report -> DateWise Report':
        return <FeeCollectionDateWise />;
      
      case 'Administration -> Office Report -> Fee Collection Report -> Canceled Report':
        return <FeeCollectionCanceled />;
      
      case 'Administration -> Office Report -> Cash Book':
        return <CashBook />;
      
      case 'Administration -> Office Report -> Narration Report':
        return <NarrationReport />;
      
      case 'Administration -> Office Report -> Fee Income Report -> Daily Collection':
        return <FeeIncomeReportDailyCollection />;
      
      case 'Administration -> Office Report -> Fee Income Report -> Daily Expense':
        return <FeeIncomeReportDailyExpense />;
      
      case 'Administration -> Office Report -> Fee Income Report -> Month Wise Income':
        return <FeeIncomeReportMonthWiseIncome />;
      
      case 'Administration -> Office Report -> Fee Income Report -> Year Wise Income':
        return <FeeIncomeReportYearWiseIncome />;
      
      case 'Administration -> Office Report -> Budget Report':
        return <BudgetReport />;
      
      case 'Administration -> Office Report -> Vendor Report':
        return <VendorReport />;
      
      case 'Administration -> Office Report -> Asset Report':
        return <AssetReport />;
      
      case 'Administration -> Transport -> Vehicle Details':
        return <VehicleDetails />;
      
      case 'Administration -> Transport -> Fee Structure':
        return <FeeStructure />;
      
      case 'Administration -> Transport -> Vehicle Report':
        return <VehicleReport />;
      
      case 'Administration -> Transport -> Bus ID Card':
        return <BusIDCard />;
      
      case 'Administration -> Transport -> Vehicle Expense':
        return <VehicleExpense />;
      
      case 'Administration -> Transport -> KMPL Report':
        return <KMPLReport />;
      
      case 'Administration -> Transport -> Student Bus':
        return <StudentBus />;
      
      case 'Administration -> Hostel -> Edit Hosteller':
        return <EditHosteller />;
      
      case 'Administration -> Hostel -> Room details':
        return <RoomDetails />;
      
      case 'Administration -> Hostel -> Room Admission':
        return <RoomAdmission />;
      
      case 'Administration -> Hostel -> Provision List':
        return <ProvisionList />;
      
      case 'Administration -> Hostel -> Permission Leave':
        return <PermissionLeave />;
      
      case 'Administration -> Hostel -> Purchase':
        return <Purchase />;
      
      case 'Administration -> Hostel -> Balance':
        return <Balance />;
      
      case 'Administration -> Hostel -> Provision':
        return <Provision />;
      
      case 'Administration -> Hostel -> Hostel Expense':
        return <HostelExpense />;
      
      case 'Administration -> Hostel Reports -> Mess Bill':
        return <MessBill />;
      
      case 'Administration -> Hostel Reports -> Hosteller Report':
        return <HostellerReport />;
      
      case 'Administration -> Hostel Reports -> Personal Ledger':
        return <PersonalLedger />;
      
      case 'Administration -> Hostel Reports -> Student Vacate List':
        return <StudentVacateList />;
      
      case 'Administration -> Hostel Reports -> Electrical and Rent':
        return <ElectricalAndRent />;
      
      case 'Administration -> Hostel Reports -> Due / Refund List':
        return <DueRefundList />;
      
      case 'Administration -> Hostel Reports -> Student Address':
        return <StudentAddress />;
      
      case 'SMS -> Single SMS':
        return <SingleSMS />;
      
      case 'SMS -> Group SMS':
        return <GroupSMS />;
      
      case 'SMS -> Templates':
        return <Templates />;
      
      case 'SMS -> Test SMS':
        return <TestSMS />;
      
      case 'SMS -> Contact Book':
        return <ContactBook />;
      
      case 'SMS -> Send Box':
        return <SentBox />;
      
      case 'SMS -> SMS Report':
        return <SMSReport />;
      
      case 'Library -> Library -> Books -> Add Book':
        return <AddBook />;
      
      case 'Library -> Library -> Books -> Edit Book':
        return <EditBook />;
      
      case 'Library -> Library -> Books -> Available Book':
        return <AvailableBook />;
      
      case 'Library -> Library -> Books -> Books Out':
        return <BookOut />;
      
      case 'Library -> Library -> Books -> All Book List':
        return <AllBookList />;
      
      case 'Library -> Library -> Barrowers -> Edit Barrowers':
        return <EditBorrower />;
      
      case 'Library -> Library -> Barrowers -> Barrower History':
        return <BorrowerHistory />;
      
      case 'Library -> Library -> Barrowers -> Current Barrower':
        return <CurrentBorrower />;
      
      case 'Library -> Library -> Barrowers -> Fine Details':
        return <FineDetails />;
      
      case 'Library -> Library -> Book Issue':
        return <BookIssue />;
      
      case 'Library -> Library -> Book Return':
        return <BookReturn />;
      
      case 'Library -> Library -> Book Renewal':
        return <BookRenewal />;
      
      case 'Library -> Library -> Student Entry':
        return <StudentEntry />;
      
      case 'Library -> Library -> Barcode Generation -> Book No':
        return <BarcodeBookNo />;
      
      case 'Library -> Library -> Barcode Generation -> Barrower':
        return <BarcodeBorrower />;
      
      case 'Library -> Library Reports -> Stock Verification':
        return <StockVerification />;
      
      case 'Library -> Library Reports -> NoDue Certificate':
        return <NoDueCertificate />;
      
      case 'Library -> Library Reports -> DueDate Exit':
        return <DueDateExit />;
      
      case 'Library -> Library Reports -> Current Stock':
        return <CurrentStock />;
      
      case 'Library -> Library Reports -> Missing Books':
        return <MissingBooks />;
      
      case 'Library -> Library Reports -> Book Transactions':
        return <BookTransactions />;
      
      case 'Library -> Library Reports -> Barrowers Report':
        return <BorrowersReport />;
      
      case 'Library -> Library Reports -> Book History':
        return <BookHistoryReport />;
      
      case 'Library -> Library Reports -> Book Availability':
        return <BookAvailabilityReport />;
      
      case 'Library -> Library Reports -> Book Position':
        return <BookPositionReport />;
      
      case 'Library -> Library Reports -> Fine Report':
        return <FineReport />;
      
      case 'Library -> Library Reports -> Library Strength':
        return <LibraryStrengthReport />;
      
      case 'Window -> Theme':
        return <ThemeSettings />;
      
      case 'Window -> Recent Act. Show':
        return <RecentActivityShow />;
      
      case 'Window -> Cascade':
        return <WindowCascade />;
      
      case 'Window -> Tile Vertical':
        return <WindowTileVertical />;
      
      case 'File -> User Details':
        return <UserDetails />;
      
      // Add more cases as you provide frames for other menu items
      default:
        return (
          <div className="min-h-screen bg-gray-50 p-6">
            <div className="w-[1150px] mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl mb-4">{currentPath}</h2>
                <p className="text-gray-600">This page is under development. Please provide the frame/component for this menu item.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  const handleNavigation = (path: string) => {
    setCurrentPath(path);
    console.log('Navigated to:', path);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        onNavigate={handleNavigation}
        currentUser={currentUser}
        onLogout={handleLogout}
        currentPath={currentPath}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Address Bar */}
        <div className="bg-white px-6 pt-4 pb-2 border-b border-gray-200">
          <AddressBar 
            breadcrumbs={generateBreadcrumbs(currentPath)}
            onNavigate={handleNavigation}
          />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {getContentComponent()}
        </div>
      </div>
    </div>
  );
}
