import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Casino() {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push('/login');
    }

    return (
        <div class="casino">
            <div class="ui grid centered">
                <div class="four wide column">
                    <div class="search ui small icon input ">
                        <input type="text" placeholder="Search Game" />
                        <i class="search icon"></i>
                    </div>
                </div>
            </div>
            <div class="ui grid">
                <div class="twelve wide column">
                    <h3 class="ui dividing header">Games</h3>

                    <div class="ui relaxed divided game items links">
                        {/* <!-- game item template --> */}
                        <div class="game item">
                            <div class="ui small image">
                                <img src="" alt="game-icon" />
                            </div>
                            <div class="content">
                                <div class="header">
                                    <b class="name"></b>
                                </div>
                                <div class="description"></div>
                                <div class="extra">
                                    <div class="play ui right floated secondary button inverted">
                                        Play
                                        <i class="right chevron icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end game item template --> */}
                    </div>
                </div>
                <div class="four wide column">
                    <h3 class="ui dividing header">Categories</h3>

                    <div class="ui selection animated list category items">
                        {/* <!-- category item template --> */}
                        <div class="category item">
                            <div class="content">
                                <div class="header"></div>
                            </div>
                        </div>
                        {/* <!-- end category item template --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
