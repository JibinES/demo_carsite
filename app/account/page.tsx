import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { User, Heart, History, Settings } from 'lucide-react'

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-neutral-bg-light py-12">
      <div className="container-custom">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-8">
          My <span className="text-primary-red">Account</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card hover className="text-center">
            <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-primary-red" />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-black mb-2">
              Profile
            </h3>
            <p className="text-sm text-neutral-medium-gray mb-4">
              Manage your personal information
            </p>
            <Button variant="outline" fullWidth>View Profile</Button>
          </Card>

          <Card hover className="text-center">
            <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary-red" />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-black mb-2">
              Wishlist
            </h3>
            <p className="text-sm text-neutral-medium-gray mb-4">
              Your saved vehicles
            </p>
            <Button variant="outline" fullWidth>View Wishlist</Button>
          </Card>

          <Card hover className="text-center">
            <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <History className="w-8 h-8 text-primary-red" />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-black mb-2">
              Recent Views
            </h3>
            <p className="text-sm text-neutral-medium-gray mb-4">
              Vehicles you've viewed
            </p>
            <Button variant="outline" fullWidth>View History</Button>
          </Card>

          <Card hover className="text-center">
            <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-red" />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-black mb-2">
              Settings
            </h3>
            <p className="text-sm text-neutral-medium-gray mb-4">
              Account preferences
            </p>
            <Button variant="outline" fullWidth>Manage Settings</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
