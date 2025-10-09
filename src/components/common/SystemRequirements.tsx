import { Card } from "../ui/card";

export function SystemRequirements() {
  return (
    <Card className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 lg:p-6 border border-gray-500/20">
      <h3 className="text-lg lg:text-xl text-gray-200 mb-3 flex items-center gap-2">
        💻 System Requirements
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-blue-300 font-semibold mb-2">Desktop:</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• Modern web browser (Chrome, Firefox, Safari)</li>
            <li>• Stable internet connection</li>
            <li>• Hardware acceleration enabled</li>
          </ul>
        </div>
        <div>
          <h4 className="text-green-300 font-semibold mb-2">Mobile:</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>• iOS 12+ or Android 8+</li>
            <li>• Modern mobile browser</li>
            <li>• Touch screen support</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}


