import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  School, 
  TrendingUp, 
  FileText, 
  Calendar,
  Brain,
  Download,
  Settings,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const schoolStats = {
    totalStudents: 287,
    totalTeachers: 12,
    totalClasses: 8,
    averageAttendance: 88.3,
    monthlyTrend: +5.2
  };

  const classData = [
    { name: "Class 1", students: 35, attendance: 91.2, teacher: "Mrs. Patel" },
    { name: "Class 2", students: 38, attendance: 89.5, teacher: "Mr. Kumar" },
    { name: "Class 3", students: 32, attendance: 85.7, teacher: "Mrs. Singh" },
    { name: "Class 4", students: 36, attendance: 90.1, teacher: "Mr. Sharma" },
    { name: "Class 5A", students: 32, attendance: 87.5, teacher: "Mrs. Sharma" },
    { name: "Class 5B", students: 35, attendance: 88.9, teacher: "Mr. Gupta" },
    { name: "Class 6A", students: 29, attendance: 86.2, teacher: "Mrs. Verma" },
    { name: "Class 6B", students: 33, attendance: 89.7, teacher: "Mr. Yadav" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">School Administration</h1>
              <p className="text-muted-foreground">Sarvodaya Primary School, Rajasthan</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date().toLocaleDateString('en-IN')}</span>
              </Badge>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link to="/">
                <Button variant="outline">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{schoolStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">Enrolled this year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{schoolStats.totalTeachers}</div>
              <p className="text-xs text-muted-foreground">{schoolStats.totalClasses} classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Attendance</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{schoolStats.averageAttendance}%</div>
              <p className="text-xs text-success">+{schoolStats.monthlyTrend}% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Alerts</CardTitle>
              <Brain className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">7</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Attendance Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Attendance Trends</CardTitle>
                  <CardDescription>School-wide attendance patterns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {["January", "February", "March", "April"].map((month, idx) => {
                      const rates = [82.5, 85.3, 88.1, 88.3];
                      return (
                        <div key={month} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{month}</span>
                          <div className="flex items-center space-x-2 flex-1 max-w-xs">
                            <Progress value={rates[idx]} className="flex-1" />
                            <span className="text-sm text-muted-foreground w-12">
                              {rates[idx]}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </CardContent>
              </Card>

              {/* Government Compliance */}
              <Card>
                <CardHeader>
                  <CardTitle>Government Compliance</CardTitle>
                  <CardDescription>Mid-day meal and scheme reporting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Mid-day Meal Report</p>
                        <p className="text-xs text-muted-foreground">April 2024</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Submitted</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Attendance Summary</p>
                        <p className="text-xs text-muted-foreground">Due in 3 days</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">Annual Report</p>
                        <p className="text-xs text-muted-foreground">Next: May 2024</p>
                      </div>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                  </div>
                  <Button className="w-full">Generate Reports</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Class Performance Overview</CardTitle>
                <CardDescription>Attendance rates by class and teacher</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {classData.map((cls) => (
                    <div key={cls.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{cls.name}</h4>
                          <span className="text-sm text-muted-foreground">{cls.teacher}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={cls.attendance} className="flex-1" />
                          <span className="text-sm w-12">{cls.attendance}%</span>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-sm font-medium">{cls.students} students</p>
                        <Badge variant={cls.attendance > 85 ? "default" : "secondary"}>
                          {cls.attendance > 85 ? "Good" : "Needs Attention"}
                        </Badge>
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
                <CardDescription>Generate various reports for stakeholders</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  <span>Daily Attendance</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  <span>Monthly Summary</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  <span>Student Report</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <School className="h-6 w-6 mb-2" />
                  <span>Government Report</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-accent" />
                  <span>AI-Powered Insights</span>
                </CardTitle>
                <CardDescription>Machine learning analysis of attendance patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-destructive/10 p-4 rounded-lg border-l-4 border-destructive">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <span className="font-medium">High Priority Alert</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    15 students across 3 classes show risk of chronic absenteeism based on current patterns.
                  </p>
                  <Button size="sm" variant="destructive">Take Action</Button>
                </div>

                <div className="bg-warning/10 p-4 rounded-lg border-l-4 border-warning">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-warning" />
                    <span className="font-medium">Trend Analysis</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Weather patterns correlate with 23% drop in attendance on rainy days. Consider scheduling adjustments.
                  </p>
                  <Button size="sm" variant="secondary">View Details</Button>
                </div>

                <div className="bg-success/10 p-4 rounded-lg border-l-4 border-success">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-5 w-5 text-success" />
                    <span className="font-medium">Predictive Insight</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Based on historical data, expect 8% attendance increase in Classes 1-3 after festival season.
                  </p>
                  <Button size="sm" variant="outline">Prepare Resources</Button>
                </div>

                <Link to="/ai-insights">
                  <Button className="w-full">
                    <Brain className="h-4 w-4 mr-2" />
                    View Advanced AI Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;