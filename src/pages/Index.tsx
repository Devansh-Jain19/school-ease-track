import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Clock, TrendingUp, Brain, CheckCircle, BookOpen, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">SmartAttend</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">Teachers</Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" size="sm">Admin</Button>
              </Link>
              <Link to="/student">
                <Button variant="outline" size="sm">Students</Button>
              </Link>
              <Link to="/government">
                <Button size="sm">Government</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            Digital Solution for Rural Schools
          </Badge>
          <h1 className="text-5xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto">
            Modernizing Attendance for Rural Indian Schools
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform manual attendance into a fast, accurate, and reliable digital system. 
            Save time, reduce errors, and improve resource allocation for better education outcomes.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-4xl mx-auto">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-6 py-3 w-full">
                <Users className="h-5 w-5 mr-2" />
                Teachers
              </Button>
            </Link>
            <Link to="/admin">
              <Button size="lg" variant="outline" className="text-lg px-6 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full">
                <GraduationCap className="h-5 w-5 mr-2" />
                Administrators
              </Button>
            </Link>
            <Link to="/student">
              <Button size="lg" variant="outline" className="text-lg px-6 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full">
                <BookOpen className="h-5 w-5 mr-2" />
                Students
              </Button>
            </Link>
            <Link to="/government">
              <Button size="lg" variant="outline" className="text-lg px-6 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full">
                <Building className="h-5 w-5 mr-2" />
                Government
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The Challenge in Rural Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Over 50% of rural schools in India still rely on manual attendance systems, 
              creating inefficiencies that impact millions of students and teachers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Time Consuming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Teachers spend 15-20 minutes daily on manual attendance, reducing instructional time
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-destructive mx-auto mb-2" />
                <CardTitle className="text-lg">Error Prone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manual records lead to inaccuracies in government reporting and resource allocation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-warning mx-auto mb-2" />
                <CardTitle className="text-lg">Poor Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Difficult to track patterns and generate insights for improving student outcomes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Limited Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No data-driven insights to help administrators make informed decisions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Smart Attendance Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A simple, mobile-friendly digital attendance system designed specifically for rural schools
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Attendance Marking</h3>
                  <p className="text-muted-foreground">
                    Mark attendance for entire classes in under 2 minutes with intuitive mobile interface
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-muted-foreground">
                    Instant reports and insights to track student attendance patterns and trends
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Government Compliance</h3>
                  <p className="text-muted-foreground">
                    Automated reporting for mid-day meals and government schemes with accurate data
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-muted-foreground">
                    Machine learning algorithms to predict attendance patterns and identify at-risk students
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Impact Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">85%</div>
                  <p className="text-white/90">Time Saved</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">95%</div>
                  <p className="text-white/90">Accuracy Improvement</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">50+</div>
                  <p className="text-white/90">Schools Benefited</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-accent-foreground mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Choose your portal to access SmartAttend's powerful attendance management system.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center max-w-3xl mx-auto">
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-6 py-3 w-full">
                <Users className="h-5 w-5 mr-2" />
                Teachers
              </Button>
            </Link>
            <Link to="/admin">
              <Button size="lg" variant="secondary" className="text-lg px-6 py-3 w-full">
                <GraduationCap className="h-5 w-5 mr-2" />
                Administrators
              </Button>
            </Link>
            <Link to="/student">
              <Button size="lg" variant="secondary" className="text-lg px-6 py-3 w-full">
                <BookOpen className="h-5 w-5 mr-2" />
                Students
              </Button>
            </Link>
            <Link to="/government">
              <Button size="lg" variant="secondary" className="text-lg px-6 py-3 w-full">
                <Building className="h-5 w-5 mr-2" />
                Government
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">SmartAttend</span>
          </div>
          <p className="text-muted-foreground">
            Empowering rural education through technology. Built for teachers, by educators.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;