import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building, 
  FileText, 
  TrendingUp, 
  Users, 
  MapPin,
  Calendar,
  Download,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  BarChart3,
  Utensils,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

const GovernmentPortal = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("current-month");

  const overallStats = {
    totalSchools: 1247,
    totalStudents: 89432,
    averageAttendance: 82.7,
    complianceRate: 94.2,
    lastUpdated: "2024-04-15 14:30"
  };

  const districtData = [
    { name: "Jaipur", schools: 156, students: 12450, attendance: 86.2, compliance: 96.1 },
    { name: "Jodhpur", schools: 134, students: 9876, attendance: 81.4, compliance: 92.8 },
    { name: "Udaipur", schools: 128, students: 8934, attendance: 79.8, compliance: 89.5 },
    { name: "Kota", schools: 98, students: 7234, attendance: 88.1, compliance: 97.2 },
    { name: "Bikaner", schools: 112, students: 6789, attendance: 77.3, compliance: 88.9 },
  ];

  const schemeReports = [
    { 
      scheme: "Mid-Day Meal", 
      status: "Updated", 
      coverage: "98.2%", 
      lastReport: "2024-04-14",
      beneficiaries: 87892
    },
    { 
      scheme: "Sarva Shiksha Abhiyan", 
      status: "Pending", 
      coverage: "96.7%", 
      lastReport: "2024-04-10",
      beneficiaries: 86543
    },
    { 
      scheme: "Samagra Shiksha", 
      status: "Updated", 
      coverage: "94.3%", 
      lastReport: "2024-04-15",
      beneficiaries: 84321
    },
  ];

  const alerts = [
    {
      priority: "High",
      message: "15 schools in Bikaner district show attendance below 70%",
      schools: 15,
      action: "Immediate intervention required"
    },
    {
      priority: "Medium", 
      message: "Mid-day meal reporting delayed from 23 schools",
      schools: 23,
      action: "Follow-up with district coordinators"
    },
    {
      priority: "Low",
      message: "Quarterly assessment due in 7 days",
      schools: 1247,
      action: "Prepare assessment materials"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
                  <Building className="h-6 w-6 text-primary" />
                  <span>Government Education Portal</span>
                </h1>
                <p className="text-muted-foreground">Rajasthan Department of Education</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: {overallStats.lastUpdated}</span>
              </Badge>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select District" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Districts</SelectItem>
              <SelectItem value="jaipur">Jaipur</SelectItem>
              <SelectItem value="jodhpur">Jodhpur</SelectItem>
              <SelectItem value="udaipur">Udaipur</SelectItem>
              <SelectItem value="kota">Kota</SelectItem>
              <SelectItem value="bikaner">Bikaner</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* State Overview Stats */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalSchools.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all districts</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Enrolled students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">State Attendance</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{overallStats.averageAttendance}%</div>
              <p className="text-xs text-muted-foreground">+2.3% vs last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{overallStats.complianceRate}%</div>
              <p className="text-xs text-muted-foreground">Reporting compliance</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="districts">Districts</TabsTrigger>
            <TabsTrigger value="schemes">Schemes</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* State Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>State Performance Overview</CardTitle>
                  <CardDescription>Key metrics and trends</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Attendance Rate</span>
                      <span className="text-sm text-muted-foreground">{overallStats.averageAttendance}%</span>
                    </div>
                    <Progress value={overallStats.averageAttendance} className="h-2" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Reporting Compliance</span>
                      <span className="text-sm text-muted-foreground">{overallStats.complianceRate}%</span>
                    </div>
                    <Progress value={overallStats.complianceRate} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-3 bg-success/10 rounded-lg">
                      <div className="text-lg font-bold text-success">156</div>
                      <p className="text-xs text-muted-foreground">High Performing Schools</p>
                    </div>
                    <div className="text-center p-3 bg-warning/10 rounded-lg">
                      <div className="text-lg font-bold text-warning">23</div>
                      <p className="text-xs text-muted-foreground">Need Attention</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-16 flex flex-col">
                    <FileText className="h-5 w-5 mb-1" />
                    <span className="text-xs">Generate Report</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col">
                    <BarChart3 className="h-5 w-5 mb-1" />
                    <span className="text-xs">View Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col">
                    <Utensils className="h-5 w-5 mb-1" />
                    <span className="text-xs">Meal Scheme</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col">
                    <GraduationCap className="h-5 w-5 mb-1" />
                    <span className="text-xs">Education Stats</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="districts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>District Performance</CardTitle>
                <CardDescription>Attendance and compliance by district</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {districtData.map((district) => (
                    <div key={district.name} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <h4 className="font-medium">{district.name} District</h4>
                            <p className="text-sm text-muted-foreground">
                              {district.schools} schools • {district.students.toLocaleString()} students
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={district.attendance >= 85 ? "default" : district.attendance >= 80 ? "secondary" : "destructive"}>
                            {district.attendance}% Attendance
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Attendance Rate</span>
                            <span>{district.attendance}%</span>
                          </div>
                          <Progress value={district.attendance} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Compliance Rate</span>
                            <span>{district.compliance}%</span>
                          </div>
                          <Progress value={district.compliance} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schemes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Government Schemes Status</CardTitle>
                <CardDescription>Tracking of various educational schemes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schemeReports.map((scheme, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{scheme.scheme}</h4>
                          <p className="text-sm text-muted-foreground">
                            {scheme.beneficiaries.toLocaleString()} beneficiaries
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={scheme.status === "Updated" ? "default" : "secondary"}>
                            {scheme.status}
                          </Badge>
                          {scheme.status === "Updated" ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-warning" />
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Coverage: </span>
                          <span className="font-medium">{scheme.coverage}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Last Report: </span>
                          <span className="font-medium">{scheme.lastReport}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Generation</CardTitle>
                <CardDescription>Generate comprehensive reports for various stakeholders</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  <span className="font-medium">State Summary</span>
                  <span className="text-xs text-muted-foreground">Overall performance</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col">
                  <MapPin className="h-6 w-6 mb-2" />
                  <span className="font-medium">District Wise</span>
                  <span className="text-xs text-muted-foreground">Regional analysis</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col">
                  <Utensils className="h-6 w-6 mb-2" />
                  <span className="font-medium">Mid-Day Meal</span>
                  <span className="text-xs text-muted-foreground">Scheme utilization</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  <span className="font-medium">Trend Analysis</span>
                  <span className="text-xs text-muted-foreground">Historical data</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="font-medium">Enrollment</span>
                  <span className="text-xs text-muted-foreground">Student statistics</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col">
                  <CheckCircle className="h-6 w-6 mb-2" />
                  <span className="font-medium">Compliance</span>
                  <span className="text-xs text-muted-foreground">Audit report</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Important notifications requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert, idx) => (
                    <div key={idx} className={`border rounded-lg p-4 ${
                      alert.priority === "High" ? "border-destructive/20 bg-destructive/5" :
                      alert.priority === "Medium" ? "border-warning/20 bg-warning/5" :
                      "border-muted bg-muted/30"
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className={`h-5 w-5 ${
                            alert.priority === "High" ? "text-destructive" :
                            alert.priority === "Medium" ? "text-warning" :
                            "text-muted-foreground"
                          }`} />
                          <Badge variant={
                            alert.priority === "High" ? "destructive" :
                            alert.priority === "Medium" ? "secondary" : "outline"
                          }>
                            {alert.priority} Priority
                          </Badge>
                        </div>
                        <Badge variant="outline">
                          {alert.schools} schools
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mb-3">
                        <strong>Recommended Action:</strong> {alert.action}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm">Take Action</Button>
                        <Button variant="outline" size="sm">Mark as Read</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GovernmentPortal;