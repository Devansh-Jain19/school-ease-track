import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Calendar,
  Target,
  Lightbulb,
  ArrowLeft,
  Download,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";

const AIInsights = () => {
  const insights = {
    predictions: [
      {
        title: "Attendance Forecast",
        description: "Based on weather and historical patterns",
        prediction: "Expected 12% drop in attendance tomorrow due to heavy rain forecast",
        confidence: 87,
        action: "Send SMS reminders to parents about school transport availability"
      },
      {
        title: "Chronic Absenteeism Risk",
        description: "Students at risk of dropping out",
        prediction: "5 students show patterns indicating high dropout risk",
        confidence: 93,
        action: "Schedule parent meetings and provide additional support"
      }
    ],
    patterns: [
      {
        pattern: "Weekly Attendance Trends",
        insight: "Mondays and Fridays show 15% lower attendance consistently",
        impact: "High",
        students_affected: 45
      },
      {
        pattern: "Weather Impact",
        insight: "Rainy days correlate with 23% attendance drop",
        impact: "Medium", 
        students_affected: 28
      },
      {
        pattern: "Festival Season Effect",
        insight: "Post-festival attendance improves by 8% in younger classes",
        impact: "Low",
        students_affected: 12
      }
    ],
    recommendations: [
      {
        priority: "High",
        title: "Implement Monday Motivation Program",
        description: "Address consistent Monday absenteeism with engaging activities",
        expected_improvement: "8-12% attendance increase",
        effort: "Medium"
      },
      {
        priority: "High", 
        title: "Weather-Based Communication System",
        description: "Automated SMS system for weather-related attendance management",
        expected_improvement: "15-20% improvement on rainy days",
        effort: "Low"
      },
      {
        priority: "Medium",
        title: "Parent Engagement App",
        description: "Mobile app for parents to track child's attendance and receive updates",
        expected_improvement: "5-10% overall improvement",
        effort: "High"
      }
    ]
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
                <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-accent" />
                  <span>AI Insights & Analytics</span>
                </h1>
                <p className="text-muted-foreground">Machine learning powered attendance analysis</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* AI Status Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Model Accuracy</CardTitle>
              <Brain className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">94.2%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Predictions Made</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">156</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">7</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Improvement Gained</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+12.3%</div>
              <p className="text-xs text-muted-foreground">Since AI deployment</p>
            </CardContent>
          </Card>
        </div>

        {/* Main AI Content */}
        <Tabs defaultValue="predictions" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-lg">
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="recommendations">Actions</TabsTrigger>
            <TabsTrigger value="setup">AI Setup</TabsTrigger>
          </TabsList>

          <TabsContent value="predictions" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {insights.predictions.map((prediction, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{prediction.title}</CardTitle>
                      <Badge className="bg-accent text-accent-foreground">
                        {prediction.confidence}% Confidence
                      </Badge>
                    </div>
                    <CardDescription>{prediction.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-warning/10 p-3 rounded-lg border-l-4 border-warning">
                      <p className="text-sm font-medium mb-1">Prediction</p>
                      <p className="text-sm text-muted-foreground">{prediction.prediction}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Confidence Level</p>
                      <Progress value={prediction.confidence} className="h-2" />
                    </div>

                    <div className="bg-primary/10 p-3 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-medium mb-1">Recommended Action</p>
                      <p className="text-sm text-muted-foreground">{prediction.action}</p>
                    </div>

                    <Button className="w-full">Implement Action</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Identified Patterns</CardTitle>
                <CardDescription>AI-discovered trends in your school's attendance data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.patterns.map((pattern, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{pattern.pattern}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant={
                            pattern.impact === "High" ? "destructive" :
                            pattern.impact === "Medium" ? "secondary" : "outline"
                          }>
                            {pattern.impact} Impact
                          </Badge>
                          <Badge variant="outline">
                            <Users className="h-3 w-3 mr-1" />
                            {pattern.students_affected} students
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{pattern.insight}</p>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Get Recommendations
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Action Plans</CardTitle>
                <CardDescription>Personalized recommendations to improve attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.recommendations.map((rec, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{rec.title}</h4>
                          <Badge variant={
                            rec.priority === "High" ? "destructive" :
                            rec.priority === "Medium" ? "secondary" : "outline"
                          }>
                            {rec.priority} Priority
                          </Badge>
                        </div>
                        <Badge variant="outline">
                          {rec.effort} Effort
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                      <div className="bg-success/10 p-3 rounded-lg mb-3">
                        <p className="text-sm font-medium text-success">Expected Improvement</p>
                        <p className="text-sm text-muted-foreground">{rec.expected_improvement}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">Start Implementation</Button>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setup" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Model Configuration</CardTitle>
                  <CardDescription>Customize AI behavior for your school</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Prediction Sensitivity</label>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground">Current: 75% (Balanced)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Alert Threshold</label>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground">Current: 85% (Conservative)</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Learning Rate</label>
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-muted-foreground">Current: 60% (Standard)</p>
                  </div>

                  <Button className="w-full">Save Configuration</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Integration</CardTitle>
                  <CardDescription>Connect additional data sources for better insights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Weather Data</p>
                      <p className="text-sm text-muted-foreground">Meteorological API</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">Connected</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Academic Calendar</p>
                      <p className="text-sm text-muted-foreground">School events & holidays</p>
                    </div>
                    <Badge className="bg-success text-success-foreground">Connected</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Student Demographics</p>
                      <p className="text-sm text-muted-foreground">Family background data</p>
                    </div>
                    <Badge variant="secondary">Not Connected</Badge>
                  </div>

                  <Button variant="outline" className="w-full">
                    Add Data Source
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AIInsights;