import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  X, 
  Search, 
  Users, 
  Clock,
  Save,
  ArrowLeft,
  UserCheck,
  UserX
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AttendanceMarking = () => {
  const { toast } = useToast();
  const [selectedClass] = useState("Class 5A");
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: "Aarav Kumar", rollNo: "001", present: true, late: false },
    { id: 2, name: "Ananya Sharma", rollNo: "002", present: true, late: false },
    { id: 3, name: "Arjun Singh", rollNo: "003", present: false, late: false },
    { id: 4, name: "Diya Patel", rollNo: "004", present: true, late: true },
    { id: 5, name: "Ishaan Gupta", rollNo: "005", present: true, late: false },
    { id: 6, name: "Kavya Reddy", rollNo: "006", present: false, late: false },
    { id: 7, name: "Kiran Yadav", rollNo: "007", present: true, late: false },
    { id: 8, name: "Manvi Jain", rollNo: "008", present: true, late: false },
    { id: 9, name: "Neel Shah", rollNo: "009", present: true, late: false },
    { id: 10, name: "Priya Verma", rollNo: "010", present: false, late: false },
    { id: 11, name: "Raj Malhotra", rollNo: "011", present: true, late: false },
    { id: 12, name: "Riya Agarwal", rollNo: "012", present: true, late: false },
    { id: 13, name: "Saanvi Kapoor", rollNo: "013", present: true, late: false },
    { id: 14, name: "Shaurya Mishra", rollNo: "014", present: false, late: false },
    { id: 15, name: "Tanvi Saxena", rollNo: "015", present: true, late: false },
  ]);

  const filteredStudents = attendanceData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.includes(searchTerm)
  );

  const presentCount = attendanceData.filter(s => s.present).length;
  const absentCount = attendanceData.filter(s => !s.present).length;
  const lateCount = attendanceData.filter(s => s.late).length;
  const attendanceRate = Math.round((presentCount / attendanceData.length) * 100);

  const toggleAttendance = (id: number) => {
    setAttendanceData(prev => 
      prev.map(student => 
        student.id === id 
          ? { ...student, present: !student.present, late: student.present ? false : student.late }
          : student
      )
    );
  };

  const toggleLate = (id: number) => {
    setAttendanceData(prev => 
      prev.map(student => 
        student.id === id 
          ? { ...student, late: !student.late, present: student.late ? student.present : true }
          : student
      )
    );
  };

  const markAllPresent = () => {
    setAttendanceData(prev => 
      prev.map(student => ({ ...student, present: true, late: false }))
    );
    toast({
      title: "All students marked present",
      description: "Attendance updated for all students in the class.",
    });
  };

  const saveAttendance = () => {
    toast({
      title: "Attendance saved successfully!",
      description: `${presentCount} present, ${absentCount} absent for ${selectedClass}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Mark Attendance</h1>
                <p className="text-muted-foreground">{selectedClass} • {new Date().toLocaleDateString('en-IN')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{new Date().toLocaleTimeString('en-IN', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceData.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present</CardTitle>
              <UserCheck className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{presentCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Absent</CardTitle>
              <UserX className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{absentCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <CheckCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{attendanceRate}%</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Class Attendance Progress</span>
              <span className="text-sm text-muted-foreground">{attendanceRate}%</span>
            </div>
            <Progress value={attendanceRate} className="mb-4" />
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or roll number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={markAllPresent} variant="outline">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark All Present
            </Button>
            <Button onClick={saveAttendance} className="bg-success text-success-foreground hover:bg-success/90">
              <Save className="h-4 w-4 mr-2" />
              Save Attendance
            </Button>
          </div>
        </div>

        {/* Student List */}
        <Card>
          <CardHeader>
            <CardTitle>Student List</CardTitle>
            <CardDescription>
              Click on student names to toggle attendance. Use checkboxes for quick selection.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    student.present 
                      ? student.late 
                        ? "bg-warning/5 border-warning/20" 
                        : "bg-success/5 border-success/20"
                      : "bg-destructive/5 border-destructive/20"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Checkbox
                      checked={student.present}
                      onCheckedChange={() => toggleAttendance(student.id)}
                      className="data-[state=checked]:bg-success data-[state=checked]:border-success"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{student.name}</span>
                        <Badge variant="outline" className="text-xs">
                          Roll #{student.rollNo}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        {student.present && (
                          <Badge 
                            variant={student.late ? "secondary" : "default"}
                            className={
                              student.late 
                                ? "bg-warning text-warning-foreground" 
                                : "bg-success text-success-foreground"
                            }
                          >
                            {student.late ? "Late" : "Present"}
                          </Badge>
                        )}
                        {!student.present && (
                          <Badge variant="destructive">Absent</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {student.present && (
                      <Button
                        size="sm"
                        variant={student.late ? "default" : "outline"}
                        onClick={() => toggleLate(student.id)}
                      >
                        {student.late ? "Mark On Time" : "Mark Late"}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant={student.present ? "destructive" : "default"}
                      onClick={() => toggleAttendance(student.id)}
                    >
                      {student.present ? (
                        <>
                          <X className="h-4 w-4 mr-1" />
                          Mark Absent
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Mark Present
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No students found matching your search.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Save Button (Mobile Sticky) */}
        <div className="fixed bottom-4 right-4 sm:hidden">
          <Button 
            onClick={saveAttendance} 
            size="lg" 
            className="bg-success text-success-foreground hover:bg-success/90 shadow-lg"
          >
            <Save className="h-5 w-5 mr-2" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMarking;