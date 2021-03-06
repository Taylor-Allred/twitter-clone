<div class="tweet">
						<div class="content">
							<img class="avatar" src="img/damenleeturks.jpg" />
							<strong class="fullname">My BFF</strong>
							<span class="username">@mybff</span>

							<!-- BLACK DIAMOND: Implement the icons for when a tweet is favorited/retweeted in the upper right of the tweet. -->
							<!-- HINT: Add to what you created in Step 5 -->
							<p class="tweet-text">Today is an amazing day.</p>

							<!-- STEP 6: The tweet actions below should only show up when you hover over the tweet. Otherwise, they should be hidden. -->
							<!-- HINT: CSS ":hover" pseudo element -->
							<div class="tweet-actions">
								<ul>
									<li><span class="icon action-reply"></span> Reply</li>
									<li><span class="icon action-retweet"></span> Retweet</li>
									<li><span class="icon action-favorite"></span> Favorite</li>
									<li><span class="icon action-more"></span> More</li>
								</ul>
							</div>

							<!-- STEP 7: The Retweets/timestamp/Reply areas below should also be hidden by default. These should only expand if you click on the tweet. Use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com -->
							<!-- HINT: jQuery ".on" eventHandler -->
							<div class="stats">
								<div class="retweets">
									<p class="num-retweets">30</p>
									<p>RETWEETS</p>
								</div>
								<div class="favorites">
									<p class="num-favorites">6</p>
									<p>FAVORITES</p>
								</div>
								<div class="users-interact">
									<div>

										<!-- BLACK DIAMOND: Implement the Bootstrap tooltips for when you hover over a user’s avatar image -->
										<!-- HINT: Bootstrap has good documentation =) -->
										<img src="img/alagoon.jpg" />
										<img src="img/vklimenko.jpg" />
									</div>
								</div>

								<!-- BLACK DIAMOND: Make the timestamp below similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery timeago plugin to make them automatic. -->
								<!-- HINT: Refer to timeago documentation -->
								<div class="time">
									1:04 PM - 19 Sep 13
								</div>
							</div>
							<div class="reply">
								<img class="avatar" src="img/alagoon.jpg" />
								<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
							</div>
						</div>
					</div><!-- .tweet -->