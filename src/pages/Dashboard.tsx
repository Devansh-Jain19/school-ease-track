import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Calendar,
  BookOpen,
  Brain,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [selectedClass, setSelectedClass] = useState("Class 5A");
  
  const classes = [
    { name: "Class 5A", students: 32, present: 28 },
    { name: "Class 5B", students: 35, present: 31 },
    { name: "Class 6A", students: 29, present: 25 },
  ];

  const todayStats = {
    totalStudents: 96,
    presentStudents: 84,
    absentStudents: 12,
    attendanceRate: 87.5
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Teacher Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Mrs. Sharma</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Today: {new Date().toLocaleDateString('en-IN')}</span>
              </Badge>
              <Link to="/">
                <Button variant="outline">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {/* Today's Stats */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">Across all classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Today</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{todayStats.presentStudents}</div>
              <p className="text-xs text-muted-foreground">
                {todayStats.attendanceRate}% attendance rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{todayStats.absentStudents}</div>
              <p className="text-xs text-muted-foreground">Need follow-up</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">18 min</div>
              <p className="text-xs text-muted-foreground">vs manual attendance</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Attendance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Quick Attendance</span>
              </CardTitle>
              <CardDescription>Mark attendance for your classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {classes.map((cls) => (
                  <Button
                    key={cls.name}
                    variant={selectedClass === cls.name ? "default" : "outline"}
                    onClick={() => setSelectedClass(cls.name)}
                    className="flex items-center space-x-2"
                  >
                    <span>{cls.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {cls.present}/{cls.students}
                    </Badge>
                  </Button>
                ))}
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{selectedClass}</h4>
                  <Badge className="bg-success text-success-foreground">
                    {classes.find(c => c.name === selectedClass)?.present}/
                    {classes.find(c => c.name === selectedClass)?.students} Present
                  </Badge>
                </div>
                <Progress 
                  value={((classes.find(c => c.name === selectedClass)?.present || 0) / 
                          (classes.find(c => c.name === selectedClass)?.students || 1)) * 100} 
                  className="mb-3"
                />
                <div className="flex space-x-2">
                  <Link to="/attendance" className="flex-1">
                    <Button className="w-full">Mark Attendance</Button>
                  </Link>
                  <Button variant="outline">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-accent" />
                <span>AI Insights</span>
              </CardTitle>
              <CardDescription>Smart analytics for your classes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-accent/10 p-3 rounded-lg border-l-4 border-accent">
                <div className="flex items-center space-x-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="font-medium text-sm">Pattern Alert</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  3 students in Class 5A show declining attendance. Consider intervention.
                </p>
              </div>

              <div className="bg-success/10 p-3 rounded-lg border-l-4 border-success">
                <div className="flex items-center space-x-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="font-medium text-sm">Improvement</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Overall attendance improved by 12% this month!
                </p>
              </div>

              <Link to="/ai-insights">
                <Button variant="outline" className="w-full">
                  View All Insights
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest attendance records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { class: "Class 5A", time: "9:15 AM", status: "Completed", rate: "87%" },
                { class: "Class 5B", time: "10:30 AM", status: "Completed", rate: "91%" },
                { class: "Class 6A", time: "11:45 AM", status: "Pending", rate: "—" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === "Completed" ? "bg-success" : "bg-warning"
                    }`} />
                    <div>
                      <p className="font-medium">{activity.class}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={activity.status === "Completed" ? "default" : "secondary"}>
                      {activity.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{activity.rate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;