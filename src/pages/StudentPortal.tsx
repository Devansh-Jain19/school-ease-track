import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Calendar, 
  TrendingUp, 
  Award, 
  Clock,
  BookOpen,
  Target,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const StudentPortal = () => {
  const studentData = {
    name: "Ananya Sharma",
    class: "Class 5A",
    rollNo: "002",
    totalDays: 45,
    presentDays: 41,
    absentDays: 4,
    attendanceRate: 91.1,
    rank: 3,
    totalStudents: 32
  };

  const monthlyData = [
    { month: "January", days: 22, present: 20, rate: 90.9 },
    { month: "February", days: 20, present: 19, rate: 95.0 },
    { month: "March", days: 23, present: 22, rate: 95.7 },
    { month: "April", days: 12, present: 10, rate: 83.3 },
  ];

  const recentAttendance = [
    { date: "2024-04-15", status: "Present", time: "9:10 AM" },
    { date: "2024-04-14", status: "Present", time: "9:05 AM" },
    { date: "2024-04-13", status: "Absent", time: "—" },
    { date: "2024-04-12", status: "Present", time: "9:15 AM" },
    { date: "2024-04-11", status: "Present", time: "9:08 AM" },
  ];

  const achievements = [
    { title: "Perfect Week", description: "5 consecutive days present", date: "Week of Apr 1-5", icon: Trophy },
    { title: "Early Bird", description: "Never late this month", date: "April 2024", icon: Clock },
    { title: "Consistency Star", description: "95%+ attendance", date: "March 2024", icon: Award },
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
                  <User className="h-6 w-6 text-primary" />
                  <span>Student Portal</span>
                </h1>
                <p className="text-muted-foreground">Welcome, {studentData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <BookOpen className="h-4 w-4" />
                <span>{studentData.class}</span>
              </Badge>
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Roll #{studentData.rollNo}</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{studentData.attendanceRate}%</div>
              <p className="text-xs text-muted-foreground">This semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Days Present</CardTitle>
              <CheckCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{studentData.presentDays}</div>
              <p className="text-xs text-muted-foreground">Out of {studentData.totalDays} days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Days Absent</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{studentData.absentDays}</div>
              <p className="text-xs text-muted-foreground">Need to improve</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
              <Target className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">#{studentData.rank}</div>
              <p className="text-xs text-muted-foreground">Out of {studentData.totalStudents} students</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Attendance Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Progress</CardTitle>
                  <CardDescription>Your attendance performance this year</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {monthlyData.map((month) => (
                    <div key={month.month} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{month.month}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">
                            {month.present}/{month.days}
                          </span>
                          <Badge variant={month.rate >= 90 ? "default" : "secondary"}>
                            {month.rate}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={month.rate} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Attendance */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Attendance</CardTitle>
                  <CardDescription>Your last 5 school days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentAttendance.map((day, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                        <div>
                          <p className="font-medium">{new Date(day.date).toLocaleDateString('en-IN')}</p>
                          <p className="text-sm text-muted-foreground">{day.time}</p>
                        </div>
                        <Badge variant={day.status === "Present" ? "default" : "destructive"}>
                          {day.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Class Comparison */}
            <Card>
              <CardHeader>
                <CardTitle>Class Comparison</CardTitle>
                <CardDescription>How you're performing compared to classmates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">Top 10%</div>
                    <p className="text-sm text-muted-foreground">You're among the best!</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">91.1%</div>
                    <p className="text-sm text-muted-foreground">Your attendance rate</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-muted-foreground">87.5%</div>
                    <p className="text-sm text-muted-foreground">Class average</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance History</CardTitle>
                <CardDescription>Detailed view of your attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/10 p-4 rounded-lg border-l-4 border-success">
                      <h4 className="font-medium text-success mb-1">Best Month</h4>
                      <p className="text-sm text-muted-foreground">March 2024 - 95.7% attendance</p>
                    </div>
                    <div className="bg-warning/10 p-4 rounded-lg border-l-4 border-warning">
                      <h4 className="font-medium text-warning mb-1">Needs Improvement</h4>
                      <p className="text-sm text-muted-foreground">April 2024 - 83.3% attendance</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Attendance Trend</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your attendance has been excellent overall, with a slight dip in April. 
                      Keep up the good work and aim for perfect attendance!
                    </p>
                    <Progress value={91.1} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Attendance milestones and awards you've earned</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={idx} className="bg-gradient-primary/10 p-4 rounded-lg border text-center">
                        <Icon className="h-8 w-8 text-accent mx-auto mb-2" />
                        <h4 className="font-medium mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                        <Badge variant="outline" className="text-xs">{achievement.date}</Badge>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <h4 className="font-medium text-accent mb-1">Next Goal</h4>
                  <p className="text-sm text-muted-foreground">
                    Achieve 95% attendance this month to earn the "Consistency Champion" badge!
                  </p>
                  <Progress value={83.3} className="mt-2 h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Current: 83.3% (Need 95%)</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Goals</CardTitle>
                <CardDescription>Set and track your attendance targets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Current Goals</h4>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Monthly Target</span>
                        <Badge className="bg-accent text-accent-foreground">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Reach 95% attendance this month</p>
                      <Progress value={83.3} className="mb-2" />
                      <p className="text-xs text-muted-foreground">Progress: 83.3% / 95%</p>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Perfect Week</span>
                        <Badge variant="outline">Upcoming</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Attend all 5 days next week</p>
                      <p className="text-xs text-muted-foreground">Start Date: Next Monday</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Rewards</h4>
                    
                    <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Trophy className="h-5 w-5 text-success" />
                        <span className="font-medium text-success">Monthly Champion</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Achieve 95%+ attendance to earn this badge and recognition in school assembly!
                      </p>
                    </div>

                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span className="font-medium text-primary">Perfect Attendance</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Miss no days in a month to earn this special certificate!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-accent/10 p-4 rounded-lg text-center">
                  <h4 className="font-medium mb-2">Keep it up, {studentData.name}!</h4>
                  <p className="text-sm text-muted-foreground">
                    You're doing great with your attendance. Every day you come to school, you're building your future!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentPortal;