import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

type UserAvatarProps = {
  user: {
    name: string;
    image?: string | null;
  };
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * UserAvatar component displays user profile image with fallback to initials
 * @param user - User object containing name and optional image
 * @param size - Avatar size (sm, md, lg)
 * @param className - Additional CSS classes
 */
export function UserAvatar({ user, size = "md", className }: UserAvatarProps) {
  const sizeClasses = {
    sm: "size-6",
    md: "size-8",
    lg: "size-10",
  };

  // Extract first letters of user's name for fallback display
  const initials = user.name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Avatar className={`${sizeClasses[size]} ${className || ""}`}>
      {user.image && (
        <AvatarImage alt={`${user.name}'s avatar`} src={user.image} />
      )}
      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 font-medium text-white text-xs">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
