(function() {var implementors = {};
implementors["game"] = [{"text":"impl State&lt;App&gt; for ChallengesPicker","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for CityPicker","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for AllCityPicker","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Navigator","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for CrossStreet","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for SearchBuildings","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Picker","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Warping","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for DebugWarp","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for CutscenePlayer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for FYI","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Floodfiller","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PathCounter","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PolygonDebugger","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for DebugMode","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ScreenshotTest","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for CollisionsViewer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PopularDestinations","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Viewer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ViewKML","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ParkingMapper","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ChangeWay","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Viewer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PolygonEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ScenarioManager","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for StoryMapEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for DevToolsMode","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for BulkSelect","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for BulkEdit","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ClusterTrafficSignalEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for LaneEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for RouteEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for StopSignEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ChangeDuration","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ShowAbsolute","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ShowRelative","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TuneRelative","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for SignalPicker","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PreviewTrafficSignal","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TrafficSignalEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ZoneEditor","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for EditMode","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for SaveEdits","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for LoadEdits","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ConfirmDiscard","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;'static&gt; State&lt;App&gt; for ChooseSomething&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PromptInput","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PopupMsg","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for PickLayer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for MapAlreadyLoaded","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;'static + DeserializeOwned&gt; State&lt;App&gt; for FileLoader&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for OptionsPanel","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TitleScreen","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for MainMenu","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for About","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for Proposals","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for CommuterPatterns","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;'static, F:&nbsp;'static, P:&nbsp;'static + Fn(&amp;mut EventCtx&lt;'_&gt;, &amp;App, &amp;Table&lt;T, F&gt;) -&gt; Panel&gt; State&lt;App&gt; for GenericTripTable&lt;T, F, P&gt;","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ActiveTraffic","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TransitRoutes","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TripSummaries","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TrafficSignalDemand","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for AgentSpawner","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for EditScenarioModifiers","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for ChangeMode","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for FinalScore","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TurnExplorer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TrafficRecorder","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for JumpToTime","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for JumpToDelay","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for TimeWarpScreen","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for UberTurnPicker","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for UberTurnViewer","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for SandboxMode","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for BackToMainMenu","synthetic":false,"types":[]},{"text":"impl State&lt;App&gt; for SandboxLoader","synthetic":false,"types":[]}];
implementors["map_editor"] = [{"text":"impl State&lt;App&gt; for MainState","synthetic":false,"types":[]}];
implementors["widgetry_demo"] = [{"text":"impl State&lt;App&gt; for Demo","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()