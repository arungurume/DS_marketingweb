import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Spa Digital Signage | Menus, Promos & Calm Visuals',
    description: 'Premium digital signage for spas and wellness centers. Update treatments, showcase services, and create relaxing visuals. Works with Android/Fire TV/Browser.',
};

export default function SpaTestPage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Spa Digital Signage Test</h1>
                <p className="text-gray-600">If you see this, the page is working!</p>
            </div>
        </div>
    );
}
